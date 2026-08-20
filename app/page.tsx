"use client";

import { FormEvent, useState } from "react";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const openSignup = () => {
    setSubmitted(false);
    setModalOpen(true);
  };

  return (
    <main className="reference-page">
      <div className="reference-canvas">
        <img className="reference-art" src="/art/landing-reference.png" alt="마녀의 연애소설 마음번역 서비스 랜딩페이지" />
        <button className="reference-hotspot reference-hotspot-top" aria-label="사전신청 열기" onClick={openSignup} />
        <button className="reference-hotspot reference-hotspot-bottom" aria-label="사전신청 열기" onClick={openSignup} />
      </div>
      {modalOpen && (
        <div className="reference-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <section className="reference-modal" role="dialog" aria-modal="true" aria-labelledby="signup-title">
            <button className="reference-modal-close" onClick={() => setModalOpen(false)} aria-label="닫기">×</button>
            {submitted ? (
              <div className="reference-success">
                <div className="reference-spark">✦</div>
                <h2>사전신청 완료!</h2>
                <p>마녀의 책에 당신들의 이름이 기록되었습니다.</p>
                <button className="reference-submit" onClick={() => setModalOpen(false)}>책을 덮기</button>
              </div>
            ) : (
              <>
                <p className="reference-modal-label">PRE-REGISTER</p>
                <h2 id="signup-title">마녀의 책에<br /><em>이름을 기록할까요?</em></h2>
                <p>출시 소식과 둘만의 다음 장을 가장 먼저 받아보세요.</p>
                <form onSubmit={submit}>
                  <label>이메일<input type="email" placeholder="you@example.com" required /></label>
                  <label>닉네임 또는 커플명<input placeholder="예: 달빛커플" required /></label>
                  <label className="reference-consent"><input type="checkbox" required /> 개인정보 수집 및 이용에 동의합니다.</label>
                  <button className="reference-submit" type="submit">마녀의 책에 기록하기 ✦</button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

