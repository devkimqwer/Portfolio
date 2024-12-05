/**
 * 컴포넌트     : DefaultComboBox.tsx
 * 최초 작성일  : 2024.10.17
 * 최종 수정일  : 2024.10.17
 */
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./DefaultComboBox.module.scss";
import { className } from "@/util/functions";
import { RiArrowDownSLine } from "react-icons/ri";

interface DefaultComboBoxProps {
  title: string;
  items: string[];
  defaultSelection?: string;
  onClickItem?: (item: string, index: number) => void;
  //
  containerStyle?: CSSProperties;
  ulStyle?: CSSProperties;
  liStyle?: CSSProperties;
}

export default function DefaultComboBox(props: DefaultComboBoxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(
    props.defaultSelection || ""
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // 콤보박스 이외의 영역 클릭 시 닫힘
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 너비 조정
  useEffect(() => {
    if (!!containerRef.current && !!ulRef.current) {
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width || 0;
      const ulWidth = ulRef.current?.getBoundingClientRect().width || 0;

      const prefWidth = `${Math.max(containerWidth, ulWidth)}px`;
      containerRef.current.style.width = prefWidth;
      ulRef.current.style.width = prefWidth;
    }
  });

  const handleClickComboBox = () => setOpen(!open);

  const handleClickItem = (selectedIndex: number) => {
    setOpen(false);
    setSelectedItem(props.items[selectedIndex]);
    if (typeof props.onClickItem === "function") {
      props.onClickItem(props.items[selectedIndex], selectedIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className={className(styles.container, open ? styles.open : "")}
      style={props.containerStyle}
      onClick={handleClickComboBox}
    >
      <div className={styles.title}>
        <div className={styles.titleContent}>
          {selectedItem ? selectedItem : props.title}
        </div>
        <div className={styles.titleArrow}>
          <RiArrowDownSLine className={styles.arrowIcon} />
        </div>
      </div>
      {props.items.length > 0 ? (
        // 항목이 있을 때
        <ul ref={ulRef} className={styles.comboItems} style={props.ulStyle}>
          {props.items.map((item, idx) => (
            <li
              key={idx}
              className={className(
                styles.comboItem,
                item === selectedItem ? styles.active : ""
              )}
              style={props.liStyle}
              onClick={() => handleClickItem(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        // 항목이 없을 때
        <ul
          ref={ulRef}
          className={className(styles.comboItems, styles.noItem)}
          style={props.ulStyle}
        >
          <li className={styles.comboItem} style={props.liStyle}>
            표시할 항목이 없습니다.
          </li>
        </ul>
      )}
    </div>
  );
}
