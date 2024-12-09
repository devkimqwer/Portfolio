import { className } from "@/util/functions";
import styles from "./Portfolio.module.scss";
import { useEffect, useRef, useState } from "react";

const SECTION = [
  { id: "INTRODUCE", name: "INTRODUCE" },
  { id: "SKILL", name: "SKILL" },
  { id: "EXPERIENCE", name: "EXPERIENCE" },
  { id: "EDUCATION", name: "EDUCATION" },
  { id: "LICENSE", name: "LICENSE" },
];

export default function Portfolio() {
  const [selectedHash, setSelectedHash] = useState<string>();
  const [showFixedNavButton, setShowFixedNavButton] = useState<boolean>(false);
  const [showFixedNavMenu, setShowFixedNavMenu] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleHashChange = () => {
      setSelectedHash(window.location.hash.split("#")[1] || undefined);
    };

    const handleScroll = () => {
      if (container && contentWrapperRef.current) {
        setShowFixedNavButton(
          container.scrollTop > contentWrapperRef.current.offsetTop - 200
        );
      }
    };

    // hashchange 이벤트 리스너 등록
    window.addEventListener("hashchange", handleHashChange);
    container?.addEventListener("scroll", handleScroll);

    // 초기 해시 설정
    handleHashChange();

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={className(styles.greetings, "mb-28")}>
        <span style={{ marginBottom: 8 }}>안녕하세요, 풀스택 개발자</span>
        <br />
        <span className={styles.strong} style={{ marginRight: 28 }}>
          김 은 영
        </span>
        <span>입니다.</span>
      </div>

      <div className={styles.verticalLine} style={{ height: 350 }}></div>

      {/* only mobile */}
      {showFixedNavButton && (
        <div className={styles.fixedNav}>
          {showFixedNavMenu ? (
            <div className={styles.fixedNavMenu}>
              {SECTION.map((item, idx) => {
                return (
                  <div
                    key={item.id}
                    className={className(
                      styles.navItem,
                      idx < SECTION.length - 1 ? "mb-28" : "",
                      selectedHash === item.id ? styles.active : ""
                    )}
                  >
                    <a href={`#${item.id}`}>{item.name}</a>
                  </div>
                );
              })}
              <div
                className={styles.closeButton}
                onClick={() => setShowFixedNavMenu(false)}
              />
            </div>
          ) : (
            <div
              className={styles.fixedNavButton}
              onClick={() => setShowFixedNavMenu(true)}
            >
              <div className={styles.bar} />
              <div className={styles.bar} />
              <div className={styles.bar} />
            </div>
          )}
        </div>
      )}

      <div className={styles.navigation}>
        {SECTION.map((item, idx) => {
          return (
            <div
              key={item.id}
              className={className(
                styles.navItem,
                idx < SECTION.length - 1 ? "mb-28" : "",
                selectedHash === item.id ? styles.active : ""
              )}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </div>
          );
        })}
      </div>

      <div className={styles.contentWrapper} ref={contentWrapperRef}>
        <div className={styles.portfolioItem} id="INTRODUCE">
          <div className={className(styles.title, "mb-24")}>
            I N T R O D U C E
          </div>
          <div className={styles.contents}>
            저는 안정적이고 유지보수에 용이한 개발 방식을 고민하고 개선하는 데
            관심이 많습니다. 또한, 서로 다른 장점을 가진 동료들과 소통하며
            효율적인 해결책을 모색하는 것을 좋아합니다. 이러한 철학을 바탕으로,
            지난 2년간 프론트앤드와 풀스택 개발 경험을 쌓아왔으며, 새로운 기술과
            도전적인 과제에도 열정적으로 임해왔습니다.
            <br />
            <br />
            경력 초반에는 React와 TypeScript를 활용한 프로젝트의 프론트엔드
            포지션에 참여하며 React의 매력에 빠지게 되었습니다. React를 통해
            거대한 생태계와 빠른 UI/UX 구현의 효율성을 경험하며 큰 흥미를
            느꼈고, 이후 풀스택 포지션으로 참여한 C# 프로젝트에서도 React에 대한
            관심을 꾸준히 유지했습니다. 현재는 사이드 프로젝트에서 프론트엔드를
            도맡아 진행하며 React와 관련된 기술 역량을 지속적으로 발전시키고
            있습니다.
            <br />
            <br />
            이전 회사에서는 Java 개발자가 주를 이루는 환경에서, C# 프로젝트의
            인력 부족 상황이 발생한 적이 있었습니다. 당시 저는 새로운 기술에
            대한 두려움이 없고 도전정신이 강한 점을 살려 흔쾌히 해당 프로젝트에
            참여했습니다. 팀원들의 도움도 받아가며 C# 및 ASP.NET 생태계에 신속히
            적응했고, 점차 처음 경험하는 모바일 운영 및 개발까지 안정적으로
            수행할 수 있었습니다.
            <br />
            <br />
            {/* 입사하게 된다면 어려운 문제에 도전하고 새로운 문제를 해결하는
            적극적인 태도를 유지하겠습니다. 또한, 동료 들과의 소통을 통해
            혼자서는 이루기 어려운 시너지를 만들어내고, 팀의 공동 목표를
            최우선으로 두며 성실히 실 행해 나가겠습니다. 더불어, 기술적 성장에
            안주하지 않고 끊임없이 배우고 발전하며, 변화하는 환경에서도 지속
            적으로 가치를 창출하는 개발자가 되고자 합니다. */}
          </div>
        </div>

        <div className={styles.portfolioItem} id="SKILL">
          <div className={className(styles.title, "mb-24")}>S K I L L</div>
          <div className={styles.contents}>
            <div className={className(styles.skillIcons, "mb-24")}>
              <div className={styles.iconContainer}>
                <div className={className(styles.image, styles.first)}></div>
                <div className={className(styles.image, styles.second)}></div>
              </div>
            </div>

            <span className={styles.subTitle}>FrontEnd</span>
            <span className={styles.subContent}>
              HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js, jQuery
            </span>
            <br />

            <span className={styles.subTitle}>Backend</span>
            <span className={styles.subContent}>
              Java, RESTful API, Spring Boot, Spring Security, JPA, Spring
              (Legacy), JSP, C#, ASP.NET, .NET Core
            </span>
            <br />

            <span className={styles.subTitle}>Database</span>
            <span className={styles.subContent}>
              Oracle, PL/SQL, MySQL, MariaDB
            </span>
            <br />

            <span className={styles.subTitle}>DevOps</span>
            <span className={styles.subContent}>Docker, CI/CD</span>

            <br />
            <span className={styles.subTitle}>Others</span>
            <span className={styles.subContent}>
              Git (GitHub, GitLab), JIRA, Notion, Figma, Android, Visual Studio
              Code, Visual Studio, IntelliJ
            </span>
          </div>
        </div>

        <div className={styles.portfolioItem} id="EXPERIENCE">
          <div className={className(styles.title, "mb-24")}>
            E X P E R I E N C E
          </div>
          <div className={styles.contents}>
            <div className={className(styles.contentCard, "mb-24")}>
              <span className={className(styles.subTitle, styles.fullWidth)}>
                HD현대 현대건설기계 하이메이트 운영 및 개발 | 넥스트리 | 2022.05
                ~ 2023.10
              </span>
              <b>하이메이트 웹앱</b>
              <ul>
                <li>설명: 건설기계 장비의 가동정보를 관리하는 웹앱입니다.</li>
                <li>사용 기술/언어: C#, ASP.NET</li>
              </ul>
              <br />

              <b>AEMP 2.0 API 서버</b>
              <ul>
                <li>
                  설명: 하이메이트 데이터를 외부에서 활용할 수 있도록 AEMP 2.0
                  표준에 따라 가공하여 제공하는 서비스입니다.
                </li>
                <li>사용 기술/언어: C#, .NET Core</li>
              </ul>
              <br />

              <b>하이메이트 모바일앱</b>
              <ul>
                <li>
                  설명: 사용자가 원격으로 장비에 시동을 걸고 조작을 할 수 있는
                  앱입니다.
                </li>
                <li>사용 기술/언어: Java, Android / Objective-C, iOS</li>
                <li>
                  특이사항: 고객사 요구에 따라 iOS는 버그 fix 정도의 수준으로만
                  관리하였고, Android를 주로 활발히 개발하였습니다.
                </li>
              </ul>
              <br />

              <b>권한서버</b>
              <ul>
                <li>
                  설명: AEMP 2.0 API 사용을 위한 토큰을 발급하고 검증하는
                  서비스입니다.
                </li>
                <li>사용 기술/언어: Java, Spring Boot, Spring Security</li>
              </ul>
            </div>

            <div className={className(styles.contentCard, "mb-24")}>
              <span className={className(styles.subTitle, styles.fullWidth)}>
                한국관광공사 콘텐츠랩 신규 개발 | 넥스트리 | 2021.09 ~ 2022.04
              </span>
              <ul>
                <li>사용 기술/언어: React, TypeScript, Next.js</li>
              </ul>
            </div>

            <div className={className(styles.contentCard, "mb-24")}>
              <span className={className(styles.subTitle, styles.fullWidth)}>
                Java 개발자 교육과정 수료 (최우수상 수상) | 2021.02.03 ~
                2021.08.04
              </span>
              한국소프트웨어인재개발원(KOSMO)에서 Java 개발자 교육과정을
              수료하였습니다. 교육 과정에서 학습하고 다룬 내용은 다음과
              같습니다.
              <br />
              Java, JSP, Spring (Legacy), MyBatis, Oracle DB, JavaScript,
              JQuery, BootStrap
              <br />
              <br />
              교육 초반부터 누구보다 적극적인 자세로 임하였고, 같은 반 학생들
              뿐만 아니라 선생님과 적극적으로 소통하며 학습 분위기를
              조성하였습니다. 교육 과정을 잘 따라오지 못하는 친구들에게는 필기
              노트를 공유하였고 이러한 점들을 인정받아 반에서 최우등 한 명에게
              수여하는 최우수상을 수상하였습니다.
            </div>
          </div>
        </div>

        <div className={styles.portfolioItem} id="EDUCATION">
          <div className={className(styles.title, "mb-24")}>
            E D U C A T I O N
          </div>
          <div className={styles.contents}>
            <ul>
              <li>
                2015.03 ~ 2021.08 | <b>이화여자대학교 물리학과 학사</b>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.portfolioItem} id="LICENSE">
          <div className={className(styles.title, "mb-24")}>
            L I C E N S E (& Etc.)
          </div>
          <div className={styles.contents}>
            <ul>
              <li>
                2021.06.02 | <b>정보처리기사</b>
              </li>
              <li>
                2023.11.26 | <b>TOEIC 845</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bg}></div>
    </div>
  );
}
