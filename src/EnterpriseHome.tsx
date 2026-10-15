import type { MouseEvent } from 'react'

type Props = { navigate: (path: string) => void }

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" /></svg>

export default function EnterpriseHome({ navigate }: Props) {
  const go = (path: string) => (event: MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); navigate(path) }
  return <main className="mobile-site">
    <section className="app-hero">
      <div className="frame-rule frame-top" /><div className="frame-rule frame-bottom" /><div className="frame-side frame-left" /><div className="frame-side frame-right" />
      <svg className="hero-orbit" viewBox="0 0 740 510" fill="none" aria-hidden="true"><path d="M-12 372C108 78 374-30 752 154"/><path d="M-28 428C148 136 458 9 780 139"/></svg>
      <div className="hero-copy-v2">
        <p className="micro-label"><i /> A FOCUS APP FOR THE FOLLOW-THROUGH</p>
        <h1>Give your attention<br />a place to <em>land.</em></h1>
        <p>COOKED is a mobile focus and accountability practice for turning an intention into the next clear action.</p>
        <div className="hero-actions-v2"><a href="/product" onClick={go('/product')} className="primary-action">Explore COOKED <Arrow /></a><a href="/how-it-works" onClick={go('/how-it-works')} className="secondary-action">See how it works</a></div>
        <div className="availability-note"><span>↳</span><p>Mobile app concept. Availability and platform details will be published only when verified.</p></div>
      </div>
      <div className="phone-stage" aria-label="Illustrative COOKED mobile app concept">
        <div className="depth-disc disc-one" /><div className="depth-disc disc-two" />
        <div className="phone-shadow" />
        <div className="phone-shell">
          <div className="phone-island" /><div className="app-status"><span>9:41</span><span>⌁ ◉</span></div>
          <div className="app-head"><img src="/cooked-logo.png" alt=""/><span>COOKED</span><b>•••</b></div>
          <div className="app-main"><p>MONDAY · 18 AUG</p><h2>One task.<br />No drama.</h2><div className="intent-card"><small>YOUR INTENTION</small><strong>Write the project outline</strong><span>Tap to edit <b>›</b></span></div><div className="focus-control"><div><span>FOCUS WINDOW</span><strong>45:00</strong></div><button type="button" aria-label="Start illustrative focus session"><svg viewBox="0 0 28 28"><path d="m10 7 11 7-11 7Z"/></svg></button></div></div>
          <div className="app-tabbar"><span className="active">●<b>Today</b></span><span>◇<b>Reflect</b></span><span>△<b>More</b></span></div>
        </div>
        <div className="float-tile focus-tile"><small>SESSION STATE</small><strong>Ready when you are.</strong><div><i /><i /><i /><i /><i /></div></div>
        <div className="float-tile streak-tile"><span>01</span><p>Keep the next return easy.</p></div>
      </div>
    </section>
    <section className="app-ticker"><span>INTENTION → ACTION</span><i /><span>FOCUS WITHOUT THE PERFORMANCE</span><i /><span>NOTICE · ADJUST · RETURN</span></section>
    <section className="intro-band"><p>MADE FOR THE MOMENT BETWEEN “I SHOULD” AND “I STARTED.”</p><h2>A practical mobile rhythm for<br />work that matters to you.</h2><a href="/product" onClick={go('/product')}>What COOKED is <Arrow /></a></section>
    <section className="detail-grid">
      <article className="detail-copy"><p className="micro-label">01 / START WITH CLARITY</p><h2>Make the first move small enough to make.</h2><p>Choose one concrete outcome before the session begins. The point is not to make a heroic plan; it is to lower the friction of returning to it.</p><a href="/how-it-works" onClick={go('/how-it-works')}>The COOKED method <Arrow /></a></article>
      <div className="mini-app mini-intent"><div className="mini-head"><span>Today</span><b>•••</b></div><p>ONE THING AT A TIME</p><h3>Review the<br />design system.</h3><div className="mini-underline"><svg viewBox="0 0 300 18" fill="none"><path d="M2 13C85 2 185 2 298 9"/></svg></div><small>THE NEXT GOOD MOVE</small></div>
      <div className="mini-app mini-review"><div className="review-ring"><span>01</span></div><h3>What made<br />returning easier?</h3><p>A short, honest review is part of the practice—not a scorecard.</p><div className="review-lines"><i /><i /><i /></div></div>
      <article className="detail-copy detail-copy-bottom"><p className="micro-label">02 / LEARN THE RETURN</p><h2>Accountability that stays useful.</h2><p>When focus slips, COOKED invites an adjustment instead of a judgment. The aim is a better next setup, not a perfect streak.</p><a href="/resources" onClick={go('/resources')}>Read the field notes <Arrow /></a></article>
    </section>
    <section className="feature-rail"><div><p>THE APP EXPERIENCE</p><h2>Designed to feel<br />quietly decisive.</h2></div><div className="feature-list"><article><span>01</span><div><h3>Intentions</h3><p>Put a name to the work before notifications name it for you.</p></div><b>↗</b></article><article><span>02</span><div><h3>Focus sessions</h3><p>Give a chosen task a real container in your day.</p></div><b>↗</b></article><article><span>03</span><div><h3>Reflection</h3><p>Use simple review to make the next return more likely.</p></div><b>↗</b></article></div></section>
    <section className="resource-window"><div><p>FROM THE FIELD NOTES</p><h2>Useful even before you open the app.</h2></div><div className="window-links"><a href="/resources/make-distraction-harder" onClick={go('/resources/make-distraction-harder')}><small>ATTENTION</small><strong>Make distraction harder, not yourself tougher.</strong><Arrow /></a><a href="/resources/a-better-start-to-focus" onClick={go('/resources/a-better-start-to-focus')}><small>PRACTICE</small><strong>A better start to a focus session.</strong><Arrow /></a></div></section>
    <section className="early-access" id="waitlist"><svg viewBox="0 0 800 220" fill="none" aria-hidden="true"><path d="M-20 150C172 21 528 33 834 125"/></svg><p>PRE-LAUNCH</p><h2>For people who<br />want a cleaner start.</h2><a href="/faq" onClick={go('/faq')}>Read the FAQ <Arrow /></a></section>
  </main>
}
