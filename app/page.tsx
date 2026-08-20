"use client";

import { FormEvent, ReactNode, useState } from "react";

type Tarot = { title: string; icon: string; copy: string };

const tarotCards: Tarot[] = [
  { title: "고독의 성문", icon: "☾", copy: "혼자 있고 싶어" },
  { title: "멈춰버린 시계", icon: "◷", copy: "답장이 늦어졌을 때" },
  { title: "위로의 마법과 해결의 망치", icon: "✦", copy: "공감이 먼저일 때" },
  { title: "애정의 증표", icon: "♡", copy: "사랑을 확인하는 방식" },
  { title: "아무거나의 함정", icon: "?", copy: "선택과 결정의 순간" },
];

const characters = [
  ["반딧불이", "〈재앙급 불안〉", "/art/landing/firefly-f.png", "작은 연락과 애정 표현으로 상대방의 마음을 확인하고 싶어합니다."],
  ["고슴도치", "〈성가신 지하〉", "/art/landing/hedgehog-f.png", "감정이 커지면 혼자 웅크려 마음을 정리할 시간이 필요합니다."],
  ["비버", "〈전문 해결사〉", "/art/landing/beaver-f.png", "문제가 생기면 공감보다 해결 방법부터 찾아주고 싶어합니다."],
  ["백호", "〈백마법 힐링계〉", "/art/landing/tiger-f.png", "해결책보다 먼저 따뜻한 위로를 건네고 싶어합니다."],
  ["토끼", "〈만능 시뮬레이터〉", "/art/landing/rabbit-f.png", "상황과 상대에 맞춰 유연하게 대화 루트를 조율합니다."],
];

function Bubble({ children, tone = "white" }: { children: ReactNode; tone?: string }) { return <div className={`comic-bubble ${tone}`}>{children}</div>; }
function SectionLabel({ children }: { children: ReactNode }) { return <div className="landing-label">{children}</div>; }

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const openSignup = () => { setSubmitted(false); setModalOpen(true); };
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  const scrollToSignup = () => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });

  return <main className="landing-outer"><div className="landing-stage">
    <header className="landing-header"><button className="landing-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>♡ <span>마음번역</span></button><button className="header-cta" onClick={openSignup}>사전신청</button></header>

    <section className="landing-hero" id="top"><SectionLabel>오해 플래그 탈출형 연애 판타지</SectionLabel><h1>모태솔로 마녀에게<br /><em>납치당했더니</em><br /><strong>연애소설의 주인공이<br />되어버렸습니다!?</strong></h1><p className="hero-question">“우리 연애, 로맨스 맞지?”</p><p className="hero-description">오늘도 말 한마디로 호감도 -30<br />서로 다른 대화 방식 때문에 오해 플래그가 쌓이는 커플을 위한<br /><b>마음번역 연애 판타지</b></p><button className="pink-cta" onClick={scrollToSignup}>마음 번역 마법 펼치기 <span>✦</span></button><small className="under-cta">무료 사전신청 · 출시 알림 제공</small></section>

    <section className="story-section opening-story"><div className="story-image city-scene"><img src="/art/hero-party.png" alt="두 사람이 마녀의 연애소설 속으로 들어가는 장면" /><Bubble>어느 날, 두 사람은 길을 걷다<br />울고 있는 마녀를 발견했습니다.</Bubble></div><div className="story-copy"><p>“도와줘~! 사랑 소설을 쓰고 싶은데<br /><b>모태솔로라서 감정선이 하나도 안 잡혀!</b>”</p><Bubble tone="witch-bubble">마녀는 두 사람의 사랑 이야기를<br /><b>열심히 쓰기 시작했어요.</b></Bubble></div><div className="story-image group-scene"><img src="/art/hero-party.png" alt="마녀와 두 주인공이 함께 있는 장면" /><Bubble>무언가를 열심히 써내려갑니다.</Bubble></div><div className="comic-impact">그때…!</div><div className="lightning-word">번쩍!</div></section>

    <section className="book-scene"><div className="book-art"><img src="/art/hero-party.png" alt="보랏빛 마법책이 펼쳐지는 장면" /><Bubble tone="impact-bubble">으아악!!</Bubble></div><Bubble tone="witch-bubble">후후후<br /><b>살아있는 소설 완성 ♥</b></Bubble><div className="book-caption">“우리 둘이 왜 연애소설의 주인공인데요?!”<br /><b>탈출하려면… 서로의 마음을 이해해야 한다고요?!</b></div></section>

    <section className="flags-section"><SectionLabel>제2화 · 오해 플래그 발생</SectionLabel><h2>우리 둘이 왜<br /><em>연애소설의 주인공</em>인데요?!</h2><p className="section-lead">서로의 마음을 이해하기 전까지<br /><b>이 소설에서 나갈 수 없다고요?!</b></p><div className="flag-list"><article><b>“혼자 있고 싶어”</b><div><span>한 사람</span> 감정을 정리할 시간이 필요해</div><strong>VS</strong><div><span>다른 사람</span> 나랑 거리를 두고 싶다는 뜻인가?</div></article><article><b>“괜찮아”</b><div><span>한 사람</span> 정말 괜찮아</div><strong>VS</strong><div><span>다른 사람</span> 사실은 서운하지만 참는 건가?</div></article><article><b>“아무거나 좋아”</b><div><span>한 사람</span> 정말 아무거나 괜찮아</div><strong>VS</strong><div><span>다른 사람</span> 내가 네 마음까지 알아서 맞춰야 해?</div></article></div></section>

    <section className="tarot-section"><SectionLabel>제3화 · 마음 타로</SectionLabel><h2>마녀가 펼친<br /><em>다섯 장의 마음 타로</em></h2><p>5가지 카드에서 서로의 마음을 확인하고,<br />우리의 사랑 이야기를 함께 읽어보세요.</p><div className="tarot-grid">{tarotCards.map((card, index) => <button className={`landing-tarot ${flipped === index ? "is-flipped" : ""}`} key={card.title} onClick={() => setFlipped(flipped === index ? null : index)}><span className="tarot-flip"><span className="tarot-front"><small>HEART TAROT · 0{index + 1}</small><b>{card.icon}</b><strong>{card.title}</strong><i>{card.copy}</i></span><span className="tarot-back"><b>{card.icon}</b><strong>{card.title}</strong><small>마음을 번역할 단서가<br />잠금 해제되었습니다.</small></span></span></button>)}</div><small className="tap-tip">카드를 눌러 뒤집어보세요 ✦</small></section>

    <section className="character-section"><SectionLabel>제4화 · 캐릭터 도감</SectionLabel><h2>우리의 연애 성향에 따라<br /><em>달라지는 캐릭터</em></h2><p>“마녀의 설정집 훔쳐보기”</p><div className="character-list">{characters.map(([name, title, image, description], index) => <article className="landing-character" key={name}><div className="character-top"><small>No. 0{index + 1}</small><span>✦</span></div><div className="character-visual"><img src={image} alt={`${name} 캐릭터`} /></div><div className="character-info"><b>{name}</b><strong>{title}</strong><p>{description}</p></div></article>)}</div></section>

    <section className="episode-section"><SectionLabel>제5화 · 다음 화 예고</SectionLabel><h2>우리가 만들어나갈<br /><em>소설의 제목은 무엇일까요?</em></h2><ol><li>두 반딧불이가 밤새 빛을 나눈 날</li><li>비버와 백호의 마음 다리 건설 작전</li><li>토끼는 고슴도치의 속도로 걸었어요</li><li>백호와 토끼 사이로 산들바람이 불었어요</li><li>토끼와 비버의 엇갈린 공략 루트</li></ol></section>

    <section className="solution-section"><SectionLabel>제6화 · 마음 번역</SectionLabel><h2>마녀는 이렇게<br /><em>집필합니다.</em></h2><div className="solution-list"><article><small>STEP 1</small><b>두 사람의 대화 캐릭터를 소환합니다.</b><p>카드 응답을 바탕으로 각자의 표현 방식을 보여드려요.</p></article><article><small>STEP 2</small><b>캐릭터 조합이 만든 스토리와 오해 플래그를 보여줍니다.</b><p>오해가 시작된 장면과 서로 다르게 들렸던 의미를 읽어요.</p></article><article><small>STEP 3</small><b>다음 장으로 넘어갈 마음번역 두루마리를 제공합니다.</b><p>감정과 요청 중심의 표현, 그리고 둘만의 대화 약속을 제안해요.</p></article></div></section>

    <section className="scroll-section"><div className="witch-mini"><img src="/art/hero-party.png" alt="마녀 캐릭터" /></div><h2>마녀는 아직<br /><em>집필 중</em>입니다.</h2><p>두 사람의 이야기를 들려주면<br />마녀가 특별한 선물을 준비해줄 거예요.</p><SectionLabel>제7화 · 최종 보상</SectionLabel><h3>마음번역 두루마리</h3><div className="scroll-card"><Bubble tone="original-bubble">너는 왜 맨날 답장이 늦어?</Bubble><div className="translation-box"><small>마녀의 조언</small><b>답장이 늦어지면 나는 조금 불안해져.<br />바쁠 때 짧게라도 알려주면 좋겠어.</b></div><div className="parrot-box"><small>앵무새의 마음번역</small><p>상대는 너를 무시하려던 게 아니라, 바쁜 일이 끝난 뒤 연락해도 괜찮다고 생각했을 수도 있대!</p></div><div className="promise-box"><small>우리만의 다음 장 약속</small><b>“바쁠 때는 ‘이따 연락할게’라는<br />작은 신호 하나 남기기.”</b></div></div></section>

    <section className="final-section" id="signup"><div className="final-art"><img src="/art/hero-party.png" alt="마녀가 마지막 선물을 건네는 장면" /><Bubble tone="witch-bubble">너희들이 해피엔딩으로<br />마무리되기를 바랄게!</Bubble></div><h2>마녀의 연애소설은<br /><em>아직 집필 중</em>입니다…</h2><button className="pink-cta" onClick={openSignup}>마녀의 연애소설 집필 도와주기 <span>✦</span></button><small className="under-cta">무료 사전신청 · 출시 알림 제공</small></section>

    <footer className="landing-footer">♡ 마음번역<br /><small>made for couples who hear the same words differently.</small></footer>
    {modalOpen && <div className="landing-modal" onMouseDown={(event) => event.target === event.currentTarget && setModalOpen(false)}><div className="modal-paper"><button className="modal-close" onClick={() => setModalOpen(false)}>×</button>{submitted ? <div className="modal-success"><span>✦</span><h2>사전신청 완료!</h2><p>마녀의 책에 당신들의 이름이 기록되었습니다.</p><button className="pink-cta" onClick={() => setModalOpen(false)}>책을 덮기</button></div> : <><SectionLabel>PRE-REGISTER</SectionLabel><h2>마녀의 책에<br /><em>이름을 기록할까요?</em></h2><p>출시 소식과 둘만의 다음 장을 가장 먼저 받아보세요.</p><form onSubmit={submit}><label>이메일<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></label><label>닉네임 또는 커플명<input value={name} onChange={(event) => setName(event.target.value)} placeholder="예: 달빛커플" required /></label><label className="modal-check"><input type="checkbox" required /> 개인정보 수집 및 이용에 동의합니다.</label><button className="pink-cta" type="submit">마녀의 책에 기록하기 ✦</button></form></>}</div></div>}
  </div></main>;
}

