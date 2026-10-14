/* Generated from the standalone case study HTML files. Diagram markup only. */
import React from "react";

const DiagramStyles = () => (
  <style>{`.cs-diagram text { font-family: inherit; fill: #f5f5f5; }
.cs-diagram .col text { font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; fill: #a3a3a3; text-anchor: middle; }
.cs-diagram .t { font-size: 12.5px; font-weight: 500; fill: #f5f5f5; text-anchor: middle; }
.cs-diagram .tk { fill: #ff0055; font-weight: 600; }
.cs-diagram .tb { font-weight: 600; }
.cs-diagram .tm { fill: #a3a3a3; }
.cs-diagram .tw { fill: #0a0a0a; font-weight: 600; }
.cs-diagram .tl { font-size: 11.5px; fill: #a3a3a3; }
.cs-diagram .nd { fill: #0a0a0a; stroke: #262626; stroke-width: 1.2; }
.cs-diagram .k { fill: rgba(255,0,85,0.12); stroke: #ff0055; stroke-width: 1.4; }
.cs-diagram .lt { fill: #0a0a0a; stroke: #a3a3a3; stroke-width: 1; stroke-dasharray: 4 4; }
.cs-diagram .dk { fill: #f5f5f5; }
.cs-diagram .rv, .cs-diagram .bar { fill: #ff0055; }
.cs-diagram .faded { opacity: 0.4; }
.cs-diagram .e { fill: none; stroke: #a3a3a3; stroke-width: 1.1; opacity: 0.75; }
.cs-diagram .e.d { stroke-dasharray: 4 4; }
.cs-diagram .e.m { stroke-dasharray: 4 4; opacity: 0.35; }
.cs-diagram .e.a { stroke: #ff0055; stroke-width: 1.6; opacity: 1; }
.cs-diagram .e.loop { stroke-dasharray: 6 5; }
.cs-diagram .ah { fill: #a3a3a3; }
.cs-diagram .aha { fill: #ff0055; }
.cs-diagram .sub { font-size: 11px; fill: #a3a3a3; }
.cs-diagram .box { fill: #0a0a0a; stroke: #262626; }
.cs-diagram .box.accent { stroke: #ff0055; }
.cs-diagram .flow { stroke: #a3a3a3; stroke-width: 1.4; fill: none; }
.cs-diagram .flow.accent { stroke: #ff0055; }
.cs-diagram .flow.dash { stroke-dasharray: 5 4; }
.cs-diagram .lbl { fill: #a3a3a3; font-size: 11px; letter-spacing: 1.5px; }
.cs-diagram .accent-text { fill: #ff0055; }`}</style>
);

const Frame = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`cs-diagram glass-card rounded-2xl p-4 sm:p-5 border border-white/10 ${className}`}>
    <DiagramStyles />
    {children}
  </div>
);

export const CoachingFunnelDiagram = ({ className = "" }: { className?: string }) => (
  <Frame className={className}>
    <svg className="w-full h-auto block" viewBox="0 0 1420 600" role="img" aria-label="Coaching funnel: content sources lead through social, search, links, community and future ads to the landing page, then to the ebook and newsletter, a welcome email sequence that builds trust, a discovery call, and coaching. People not ready yet loop back to the newsletter.">
<defs>
<symbol id="cs-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/></symbol>
<symbol id="cs-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></symbol>
<marker id="fn2-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" className="ah"/></marker>
<marker id="fn2-ara" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" className="aha"/></marker>
</defs>
<g className="col">
<text x="120" y="16">SOURCES</text>
<text x="345" y="16">CHANNELS</text>
<text x="550" y="16">ENTRY</text>
<text x="760" y="16">CAPTURE</text>
<text x="965" y="16">NURTURE</text>
<text x="1135" y="16">CONVERT</text>
<text x="1327" y="16">BUY</text>
</g>
<path className="e" d="M220,50 C245,50 245,118 268,118" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M220,95 C245,95 245,118 268,118" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M220,140 C245,140 245,118 268,118" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M220,185 C245,185 245,118 268,118" markerEnd="url(#fn2-ar)"/>
<path className="e d" d="M220,262 L268,262" markerEnd="url(#fn2-ar)"/>
<path className="e d" d="M220,332 C245,332 245,355 268,355" markerEnd="url(#fn2-ar)"/>
<path className="e d" d="M220,377 C245,377 245,355 268,355" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M220,455 L268,455" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M420,118 C452,118 448,300 478,300" markerEnd="url(#fn2-ar)"/>
<path className="e d" d="M420,262 C452,262 448,300 478,300" markerEnd="url(#fn2-ar)"/>
<path className="e d" d="M420,355 C452,355 448,300 478,300" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M420,455 C452,455 448,300 478,300" markerEnd="url(#fn2-ar)"/>
<path className="e m" d="M420,530 C452,530 448,300 478,300" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M420,118 C560,118 600,170 678,170" markerEnd="url(#fn2-ar)"/>
<path className="e" d="M620,300 C650,300 650,170 678,170" markerEnd="url(#fn2-ar)"/>
<path className="e a" d="M620,300 L678,300" markerEnd="url(#fn2-ara)"/>
<path className="e" d="M550,322 L550,396" markerEnd="url(#fn2-ar)"/>
<path className="e a" d="M760,190 L760,278" markerEnd="url(#fn2-ara)"/>
<text className="tl" x="768" y="238">same email list</text>
<path className="e" d="M840,290 C868,290 862,170 888,170" markerEnd="url(#fn2-ar)"/>
<path className="e a" d="M840,312 L901,312" markerEnd="url(#fn2-ara)"/>
<path className="e a" d="M1034,300 L1068,300" markerEnd="url(#fn2-ara)"/>
<path className="e a" d="M1200,300 C1222,300 1222,150 1243,150" markerEnd="url(#fn2-ara)"/>
<text className="tl" x="1214" y="228" textAnchor="end">Yes</text>
<path className="e" d="M1200,300 C1222,300 1222,430 1243,430" markerEnd="url(#fn2-ar)"/>
<text className="tl" x="1214" y="378" textAnchor="end">Not yet</text>
<path className="e a" d="M1327,170 L1327,193" markerEnd="url(#fn2-ara)"/>
<path className="e a" d="M1327,235 L1327,258" markerEnd="url(#fn2-ara)"/>
<path className="e loop" d="M1327,450 C1327,590 760,590 760,324" markerEnd="url(#fn2-ar)"/>
<text className="tl" x="1043" y="566" textAnchor="middle">Stays on the newsletter until ready</text>
<rect className="k" x="20" y="33" width="200" height="34" rx="17"/><text className="t tk" x="120" y="54">YouTube video and clips</text>
<rect className="nd" x="20" y="78" width="200" height="34" rx="17"/><text className="t" x="120" y="99">Carousels and posts</text>
<rect className="nd" x="20" y="123" width="200" height="34" rx="17"/><text className="t" x="120" y="144">Reviews and testimonials</text>
<rect className="nd" x="20" y="168" width="200" height="34" rx="17"/><text className="t" x="120" y="189">Guests and collaborations</text>
<rect className="lt" x="20" y="245" width="200" height="34" rx="17"/><text className="t tm" x="120" y="266">Keyword ranking</text>
<rect className="lt" x="20" y="315" width="200" height="34" rx="17"/><text className="t tm" x="120" y="336">Blog from transcripts</text>
<rect className="lt" x="20" y="360" width="200" height="34" rx="17"/><text className="t tm" x="120" y="381">Backlinks</text>
<rect className="nd" x="20" y="438" width="200" height="34" rx="17"/><text className="t" x="120" y="459">Monthly in-person event</text>
<rect className="nd" x="270" y="100" width="150" height="36" rx="18"/><text className="t tb" x="345" y="122">Social platforms</text>
<rect className="lt" x="270" y="244" width="150" height="36" rx="18"/><text className="t tm" x="345" y="266">Organic search</text>
<rect className="lt" x="270" y="337" width="150" height="36" rx="18"/><text className="t tm" x="345" y="359">External links</text>
<rect className="nd" x="270" y="437" width="150" height="36" rx="18"/><text className="t tb" x="345" y="459">Community</text>
<g className="faded">
<rect className="lt" x="270" y="512" width="150" height="36" rx="18"/><text className="t tm" x="345" y="534">Ads (future)</text>
</g>
<rect className="dk" x="480" y="278" width="140" height="44" rx="8"/><text className="t tw" x="550" y="304">Landing page</text>
<rect className="nd" x="480" y="398" width="140" height="40" rx="8"/><text className="t" x="550" y="422">Free talks</text>
<rect className="k" x="680" y="150" width="160" height="40" rx="8"/><use href="#cs-book" x="716" y="162" width="16" height="16" className="tk"/><text className="t tk" x="770" y="174">Free ebook</text>
<rect className="k" x="680" y="280" width="160" height="40" rx="8"/><use href="#cs-envelope" x="711" y="292" width="16" height="16" className="tk"/><text className="t tk" x="770" y="304">Newsletter</text>
<rect className="nd" x="890" y="153" width="150" height="34" rx="8"/><text className="t" x="965" y="174">Exclusive content</text>
<rect className="bar" x="905" y="294" width="24" height="36" rx="3"/>
<rect className="bar" x="940" y="276" width="24" height="54" rx="3"/>
<rect className="bar" x="975" y="258" width="24" height="72" rx="3"/>
<rect className="bar" x="1010" y="240" width="24" height="90" rx="3"/>
<text className="tl" x="917" y="346" textAnchor="middle">1</text>
<text className="tl" x="952" y="346" textAnchor="middle">2</text>
<text className="tl" x="987" y="346" textAnchor="middle">3</text>
<text className="tl" x="1022" y="346" textAnchor="middle">4</text>
<text className="tl" x="969" y="366" textAnchor="middle">Welcome emails build trust</text>
<rect className="k" x="1070" y="278" width="130" height="44" rx="8"/><text className="t tk" x="1135" y="304">Discovery call</text>
<text className="tl" x="1327" y="120" textAnchor="middle">1-1 coaching</text>
<rect className="nd" x="1245" y="130" width="165" height="40" rx="8"/><text className="t" x="1327" y="154">Reset, £1,500</text>
<rect className="nd" x="1245" y="195" width="165" height="40" rx="8"/><text className="t" x="1327" y="219">Partnership, £6,000</text>
<rect className="rv" x="1245" y="260" width="165" height="40" rx="8"/><text className="t tw" x="1327" y="284">Revenue</text>
<rect className="nd" x="1245" y="410" width="165" height="40" rx="8"/><text className="t" x="1327" y="434">Not ready yet</text>
</svg>
  </Frame>
);

export const JournalSystemDiagram = ({ className = "" }: { className?: string }) => (
  <Frame className={className}>
    <svg className="w-full h-auto block" viewBox="0 0 1000 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Journal system: four roles on one platform running a five-stage editorial workflow that publishes to the journal website">
<defs>
<marker id="oj-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M1 1 L9 5 L1 9" fill="none" stroke="#a3a3a3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
</marker>
<marker id="oj-ara" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M1 1 L9 5 L1 9" fill="none" stroke="#ff0055" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
</marker>
</defs>
<text x="20" y="24" className="lbl">ROLES</text>
<rect className="box" x="20" y="38" width="227" height="62" rx="10" strokeWidth="1" />
<text x="133" y="64" textAnchor="middle" fontSize="15">Authors</text>
<text x="133" y="84" textAnchor="middle" className="sub" fill="#a3a3a3">Submit and track manuscripts</text>
<rect className="box" x="264" y="38" width="227" height="62" rx="10" strokeWidth="1" />
<text x="377" y="64" textAnchor="middle" fontSize="15">Reviewers</text>
<text x="377" y="84" textAnchor="middle" className="sub" fill="#a3a3a3">Review and recommend</text>
<rect className="box" x="509" y="38" width="227" height="62" rx="10" strokeWidth="1" />
<text x="622" y="64" textAnchor="middle" fontSize="15">Editors</text>
<text x="622" y="84" textAnchor="middle" className="sub" fill="#a3a3a3">Assign, decide, publish</text>
<rect className="box" x="753" y="38" width="227" height="62" rx="10" strokeWidth="1" />
<text x="866" y="64" textAnchor="middle" fontSize="15">Readers</text>
<text x="866" y="84" textAnchor="middle" className="sub" fill="#a3a3a3">Browse issues and articles</text>
<path className="flow" d="M133 100 L133 138" markerEnd="url(#oj-ar)" />
<path className="flow" d="M377 100 L377 138" markerEnd="url(#oj-ar)" />
<path className="flow" d="M622 100 L622 138" markerEnd="url(#oj-ar)" />
<path className="flow" d="M866 100 L866 138" markerEnd="url(#oj-ar)" />
<rect className="box accent" x="20" y="142" width="960" height="66" rx="10" strokeWidth="1.4" />
<text x="500" y="170" textAnchor="middle" fontSize="16" className="accent-text">Journal Management Platform</text>
<text x="500" y="190" textAnchor="middle" className="sub" fill="#a3a3a3">
Set up for the journal: roles, review process, email templates and branding</text>
<path className="flow accent" d="M174 208 L174 250" markerEnd="url(#oj-ara)" />
<path className="flow accent" d="M300 208 L300 250" markerEnd="url(#oj-ara)" />
<path className="flow accent" d="M500 208 L500 250" markerEnd="url(#oj-ara)" />
<path className="flow accent" d="M700 208 L700 250" markerEnd="url(#oj-ara)" />
<path className="flow accent" d="M900 208 L900 250" markerEnd="url(#oj-ara)" />
<text x="20" y="242" className="lbl">WORKFLOW</text>
<rect className="box" x="20" y="254" width="160" height="70" rx="10" strokeWidth="1" />
<text x="100" y="282" textAnchor="middle" fontSize="15">Submission</text>
<text x="100" y="302" textAnchor="middle" className="sub" fill="#a3a3a3">Online, with tracking</text>
<rect className="box" x="220" y="254" width="160" height="70" rx="10" strokeWidth="1" />
<text x="300" y="282" textAnchor="middle" fontSize="15">Peer review</text>
<text x="300" y="302" textAnchor="middle" className="sub" fill="#a3a3a3">Invites to decision</text>
<rect className="box" x="420" y="254" width="160" height="70" rx="10" strokeWidth="1" />
<text x="500" y="282" textAnchor="middle" fontSize="15">Copyediting</text>
<text x="500" y="302" textAnchor="middle" className="sub" fill="#a3a3a3">Edits with the author</text>
<rect className="box" x="620" y="254" width="160" height="70" rx="10" strokeWidth="1" />
<text x="700" y="282" textAnchor="middle" fontSize="15">Production</text>
<text x="700" y="302" textAnchor="middle" className="sub" fill="#a3a3a3">Final files and PDFs</text>
<rect className="box accent" x="820" y="254" width="160" height="70" rx="10" strokeWidth="1.4" />
<text x="900" y="282" textAnchor="middle" fontSize="15" className="accent-text">Publication</text>
<text x="900" y="302" textAnchor="middle" className="sub" fill="#a3a3a3">Scheduled into issues</text>
<path className="flow" d="M180 289 L216 289" markerEnd="url(#oj-ar)" />
<path className="flow" d="M380 289 L416 289" markerEnd="url(#oj-ar)" />
<path className="flow" d="M580 289 L616 289" markerEnd="url(#oj-ar)" />
<path className="flow" d="M780 289 L816 289" markerEnd="url(#oj-ar)" />
<path className="flow dash" d="M300 324 L300 350 L100 350 L100 328" markerEnd="url(#oj-ar)" />
<text x="200" y="366" textAnchor="middle" className="sub" fill="#a3a3a3">Revisions</text>
<path className="flow accent" d="M900 324 L900 396" markerEnd="url(#oj-ara)" />
<text x="20" y="392" className="lbl">PUBLIC SITE</text>
<rect className="box" x="20" y="400" width="960" height="56" rx="10" strokeWidth="1" />
<text x="500" y="424" textAnchor="middle" fontSize="15">Journal website</text>
<text x="500" y="443" textAnchor="middle" className="sub" fill="#a3a3a3">
Current issue, archive, article pages, author guidelines
</text>
</svg>
  </Frame>
);

export const JournalProcessDiagram = ({ className = "" }: { className?: string }) => (
  <Frame className={className}>
    <svg className="w-full h-auto block"
viewBox="0 0 1000 330"
xmlns="http://www.w3.org/2000/svg"
role="img"
aria-label="Eight-stage editorial process with a payment gate before copyediting"
>
<defs>
<marker id="pf-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M1 1 L9 5 L1 9" fill="none" stroke="#a3a3a3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
</marker>
<marker id="pf-ara" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M1 1 L9 5 L1 9" fill="none" stroke="#ff0055" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
</marker>
</defs>
<text x="20" y="22" className="lbl">EDITORIAL PROCESS</text>
<rect className="box" x="20" y="34" width="215" height="66" rx="10" strokeWidth="1" />
<text x="127" y="62" textAnchor="middle" fontSize="15">1. Submission</text>
<text x="127" y="82" textAnchor="middle" className="sub" fill="#a3a3a3">Author submits online</text>
<rect className="box" x="262" y="34" width="215" height="66" rx="10" strokeWidth="1" />
<text x="369" y="62" textAnchor="middle" fontSize="15">2. Screening</text>
<text x="369" y="82" textAnchor="middle" className="sub" fill="#a3a3a3">Scope, originality, ethics</text>
<rect className="box" x="523" y="34" width="215" height="66" rx="10" strokeWidth="1" />
<text x="630" y="62" textAnchor="middle" fontSize="15">3. Peer review</text>
<text x="630" y="82" textAnchor="middle" className="sub" fill="#a3a3a3">Double-anonymous</text>
<rect className="box" x="765" y="34" width="215" height="66" rx="10" strokeWidth="1" />
<text x="872" y="62" textAnchor="middle" fontSize="15">4. Revision</text>
<text x="872" y="82" textAnchor="middle" className="sub" fill="#a3a3a3">One or more rounds</text>
<path className="flow" d="M235 67 L258 67" markerEnd="url(#pf-ar)" />
<path className="flow" d="M477 67 L519 67" markerEnd="url(#pf-ar)" />
<path className="flow" d="M738 67 L761 67" markerEnd="url(#pf-ar)" />
<path className="flow" d="M872 100 L872 134 L127 134 L127 160" markerEnd="url(#pf-ar)" />
<rect className="box" x="20" y="164" width="215" height="66" rx="10" strokeWidth="1" />
<text x="127" y="192" textAnchor="middle" fontSize="15">5. Acceptance</text>
<text x="127" y="212" textAnchor="middle" className="sub" fill="#a3a3a3">Editor decides on reviews</text>
<rect className="box accent" x="262" y="164" width="215" height="66" rx="10" strokeWidth="1.4" />
<text x="369" y="192" textAnchor="middle" fontSize="15" className="accent-text">Payment gate</text>
<text x="369" y="212" textAnchor="middle" className="sub" fill="#a3a3a3">Fee confirmed before publishing</text>
<rect className="box" x="523" y="164" width="215" height="66" rx="10" strokeWidth="1" />
<text x="630" y="192" textAnchor="middle" fontSize="15">6. Copyedit + typeset</text>
<text x="630" y="212" textAnchor="middle" className="sub" fill="#a3a3a3">Author approves the proof</text>
<rect className="box" x="765" y="164" width="215" height="66" rx="10" strokeWidth="1" />
<text x="872" y="192" textAnchor="middle" fontSize="15">7. Publication</text>
<text x="872" y="212" textAnchor="middle" className="sub" fill="#a3a3a3">Assigned to an issue</text>
<path className="flow accent" d="M235 197 L258 197" markerEnd="url(#pf-ara)" />
<path className="flow accent" d="M477 197 L519 197" markerEnd="url(#pf-ara)" />
<path className="flow" d="M738 197 L761 197" markerEnd="url(#pf-ar)" />
<path className="flow accent" d="M872 230 L872 262" markerEnd="url(#pf-ara)" />
<rect className="box accent" x="20" y="266" width="960" height="46" rx="10" strokeWidth="1.4" />
<text x="500" y="294" textAnchor="middle" fontSize="15" className="accent-text">
8. Archive and indexing: open access, discoverable through 28 databases
</text>
</svg>
  </Frame>
);
