"use client";

import { FormEvent, useLayoutEffect, useState } from "react";

const ASSET = "/art/figma/";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="ink-label">{children}</span>;
}

function Bubble({ label, children, accent = "plum", className = "" }: { label?: string; children: React.ReactNode; accent?: "plum" | "pink" | "green"; className?: string }) {
  return <div className={`comic-bubble ${accent} ${className}`}>{label && <strong>{label}</strong>}<div>{children}</div></div>;
}

function FlagCard({ no, title, first, second }: { no: number; title: string; first: string; second: string }) {
  return <article className="flag-card"><Label>FLAG {no}</Label><h3>“{title}”</h3><Bubble label="한 사람">{first}</Bubble><div className="vs">VS</div><Bubble label="다른 사람" accent="pink">{second}</Bubble></article>;
}

function CharacterCard({ title, name, description, female, male, locked = false }: { title: string; name: string; description: string; female?: string; male?: string; locked?: boolean }) {
  return <article className={`character-card ${locked ? "locked" : ""}`}><div className="character-art">{locked ? <span className="question-mark">?</span> : <><img src={`${ASSET}${female}`} alt="" /><img src={`${ASSET}${male}`} alt="" /></>}</div><div className="character-copy"><small>{title}</small><h3>{name}</h3><p>{description}</p></div></article>;
}

function Step({ no, title, children }: { no: number; title: string; children: React.ReactNode }) {
  return <article className="step-card"><Label>STEP {no}</Label><h3>{title}</h3><p>{children}</p></article>;
}

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const resize = () => setScale(Math.min(1, window.innerWidth / 390));
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  const openSignup = () => { setSubmitted(false); setModalOpen(true); };

  return (
    <main className="figma-page">
      <div className="figma-shell" style={{ height: `${13181 * scale}px` }}>
        <div className="figma-stage" style={{ transform: `scale(${scale})` }}>
          <section className="hero section-paper"><div className="hero-copy"><Label>오해 플래그 탈출형 연애 판타지</Label><h1>모태솔로 마녀에게 <em>납치당했더니</em><span>연애소설의 주인공</span>이 되어버렸습니다!?</h1><p className="hero-question">“우리 연애, 로맨스 맞지?”</p><p className="hero-desc"><b>오늘도 말 한마디로 호감도 -30</b><br />서로 다른 대화 방식 때문에 오해 플래그?!<br />우리 커플을 위한 마음 번역 마법☆</p><button className="pink-button" onClick={openSignup}>✦　마음 번역 마법 체험하기　✦</button><small className="hero-note">무료 사전신청 · 출시 알림 제공</small></div></section>

          <section className="story-opening section-paper"><div className="scene scene-1"><img src={`${ASSET}optimized/112360425.jpg`} alt="비 오는 저녁, 서로 마주 선 두 사람" /></div><Bubble className="bubble-a">어느 날, 두 사람은 길을 걷다<br />울고 있는 마녀를 발견했습니다.</Bubble><Bubble className="bubble-b" accent="pink">도와줘~! 사랑 소설을 쓰고 싶은데<br />모태솔로라 감정선이 하나도 안 잡혀!</Bubble><div className="scene scene-2"><img src={`${ASSET}optimized/112360418.jpg`} alt="두 사람 앞에 나타난 마녀" /></div><Bubble className="bubble-c">마녀는 두 사람의 사랑<br />이야기를 열심히 쓰고,</Bubble><div className="scene scene-3"><img src={`${ASSET}optimized/112360420.jpg`} alt="마녀의 책을 둘러싼 세 사람" /></div><Bubble className="bubble-d" accent="pink">무언가를 열심히 써내려갔습니다.</Bubble><div className="scene scene-4"><img src={`${ASSET}optimized/112360421.jpg`} alt="마녀와 두 사람이 함께 책을 보는 장면" /></div></section>

          <section className="magic-pull"><Bubble className="pull-caption">그때 ... !</Bubble><div className="pull-art"><img src={`${ASSET}optimized/112360423.jpg`} alt="마법의 책이 두 사람을 빨아들이는 장면" /></div><div className="pull-word">으아악!!</div></section>

          <section className="portal-scenes section-paper"><div className="scene portal-1"><img src={`${ASSET}optimized/112360424.jpg`} alt="보랏빛 포털이 열린 마법의 책" /></div><div className="scene portal-2"><img src={`${ASSET}optimized/112360426.jpg`} alt="마법의 책 속으로 빨려 들어가는 두 사람" /></div><Bubble className="portal-bubble">후후후<br />살아있는 소설 완성 ♥</Bubble><div className="scene witch-close"><img src={`${ASSET}optimized/112360434.jpg`} alt="마녀가 미소 지으며 책을 펼치는 장면" /></div><Bubble className="witch-line" accent="pink">우리 둘이 왜 연애소설의 주인공인데요?!<br />탈출 조건은 서로의 마음 이해하기?!</Bubble></section>

          <section className="flags-section"><div className="flags-intro"><Label>오해 플래그 발생</Label><h2>같은 말도 다르게 들리는<br /><b>우리의 오해 루트</b></h2></div><FlagCard no={1} title="혼자 있고 싶어" first="감정을 정리할 시간이 필요해" second="나랑 거리를 두고 싶다는 뜻인가?" /><FlagCard no={2} title="괜찮아" first="정말 괜찮아" second="사실은 서운하지만 참는 건가?" /><FlagCard no={3} title="아무거나 좋아" first="정말 아무거나 괜찮아" second="내가 네 마음까지 알아서 맞춰야 해?" /></section>

          <section className="tarot-section section-paper"><Label>제2화 · 마음 타로 펼치기</Label><h2>마녀가 펼친<br /><b>다섯 장의 마음 타로</b></h2><p>5가지 패턴에서 서로의 마음을 확인하고,<br />우리의 사랑 이야기를 함께 만들어보세요.</p><div className="tarot-row">{["img0.png", "img1.png", "img2.png", "img3.png", "img4.png"].map((file, i) => <img key={file} src={`${ASSET}${file}`} alt={`마음 타로 ${i + 1}`} />)}</div></section>

          <section className="index-section section-lilac"><Label>캐릭터 도감</Label><h2>우리의 연애 성향에 따라 달라지는 캐릭터,<br /><b>마녀의 설정집 훔쳐보기</b></h2><div className="character-list"><CharacterCard title="연락 1분 지연에도 멸망 플래그" name="〈재앙급 불안〉 반딧불이" description="작은 연락과 애정 표현으로 상대방의 마음을 확인하고 싶어합니다." female="firefly-f.png" male="firefly-m.png" /><CharacterCard title="상처받으면 동굴에 틀어박혀 잠수" name="〈성가신 지하〉 고슴도치" description="감정이 커지면 혼자 웅크려 마음을 정리할 시간이 필요합니다." female="hedgehog-f.png" male="hedgehog-m.png" /><CharacterCard title="모든 문제를 해결 퀘스트로 전환" name="〈전문 해결사〉 비버" description="문제가 생기면 공감보다 해결 방법부터 찾아주고 싶어합니다." female="beaver-f.png" male="beaver-m.png" /><CharacterCard title="눈물을 감지하면 회복 마법부터 시전" name="〈백마법 힐링계〉 백호" description="해결책보다 먼저 따뜻한 위로를 건네고 싶어합니다." female="tiger-f.png" male="tiger-m.png" /><CharacterCard locked title="아직 소환 대기 중" name="만능 〈시뮬레이터〉 토끼" description="토끼의 도감 페이지는 다음 업데이트에서 열립니다." /></div></section>

          <section className="story-titles section-paper"><Label>제목으로 보는 우리 궁합</Label><h2>우리가 만들어나갈<br />소설의 제목은 무엇일까요?</h2><ol>{["두 반딧불이는 아직 밤을 끝내지 못했다","비버와 백호의 마음 사로잡기 7가지 대작전","백호와 토끼, 그리고 여름의 바람은 느렸다","고슴도치가 오지 않는 밤에도 반딧불이는 빛난다","고슴도치의 속도로 너에게 다가가는 법","토끼와 비버의 엇갈린 공략 루트? 근데 왜 자꾸 마주치는 거야?"].map((title, i) => <li key={title}><b>{String(i + 1).padStart(2, "0")}</b><span>「{title}」</span></li>)}</ol></section>

          <section className="solution-section"><Label>공략 루트</Label><h2>마녀는 이렇게 <b>집필</b>합니다</h2><div className="steps"><Step no={1} title="두 사람의 대화 캐릭터를 소환합니다.">각자의 말버릇과 표현 방식을 읽어, 연애 캐릭터로 소환해요.</Step><Step no={2} title="캐릭터 조합이 만든 스토리와 오해 플래그를 보여줍니다.">이 조합에서 자주 발생하는 오해 루트를 미리 알려줘요.</Step><Step no={3} title="다음 장으로 넘어갈 마음번역 두루마리를 제공합니다.">감정과 요청 중심의 표현, 그리고 둘만의 대화 약속까지.</Step></div></section>

          <section className="writing-section section-paper"><div className="magic-ring" /><img className="writing-witch" src={`${ASSET}witch.png`} alt="집필 중인 마녀" /><h2>마녀는 아직 <b>집필중</b>입니다.</h2><p>두 사람이 해피엔딩으로 나아가기 위해<br />선물 정도는 주겠다굿 ~ !</p></section>

          <section className="reward-section section-paper"><Label>특별 보상</Label><h2>마녀의 <b>특별 선물</b></h2><h3>마음번역 두루마리</h3><div className="scroll-panel"><Bubble className="scroll-original">원래 발화<br /><b>“너는 왜 맨날 답장이 늦어?”</b></Bubble><div className="sfx">스르륵—</div><Bubble className="scroll-advice" accent="pink">마녀의 조언<br /><b>답장이 늦어지면 나는 조금 불안해져.<br />바쁠 때 짧게라도 알려주면 좋겠어.</b></Bubble><Bubble className="scroll-translate">앵무새의 마음번역<br /><b>상대는 너를 무시하려던 게 아니라,<br />바쁜 일이 끝난 뒤 연락해도 괜찮다고<br />생각했을 수도 있대!</b></Bubble><div className="promise"><small>우리만의 다음 장 약속</small><b>바쁠 때는 ‘이따 연락할게’라는<br />작은 신호 하나 남기기.</b></div></div></section>

          <section className="final-section"><img src={`${ASSET}optimized/112360433.jpg`} alt="마녀와 함께 걷는 두 사람" /><div className="final-copy"><button className="pink-button" onClick={openSignup}>✦　마녀의 연애소설 집필 도와주기　✦</button><small>무료 사전신청 · 출시 알림 제공</small></div></section>
        </div>
      </div>
      {modalOpen && <div className="reference-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}><section className="reference-modal" role="dialog" aria-modal="true" aria-labelledby="signup-title"><button className="reference-modal-close" onClick={() => setModalOpen(false)} aria-label="닫기">×</button>{submitted ? <div className="reference-success"><div className="reference-spark">✦</div><h2>사전신청 완료!</h2><p>마녀의 책에 당신들의 이름이 기록되었습니다.</p><button className="reference-submit" onClick={() => setModalOpen(false)}>책을 덮기</button></div> : <><p className="reference-modal-label">PRE-REGISTER</p><h2 id="signup-title">마녀의 책에<br /><em>이름을 기록할까요?</em></h2><p>출시 소식과 둘만의 다음 장을 가장 먼저 받아보세요.</p><form onSubmit={submit}><label>이메일<input type="email" placeholder="you@example.com" required /></label><label>닉네임 또는 커플명<input placeholder="예: 달빛커플" required /></label><label className="reference-consent"><input type="checkbox" required /> 개인정보 수집 및 이용에 동의합니다.</label><button className="reference-submit" type="submit">마녀의 책에 기록하기 ✦</button></form></>}</section></div>}
    </main>
  );
}

