function SvgShell({ children, title, className = "" }) {
  return (
    <svg
      className={`building-svg ${className}`}
      viewBox="0 0 260 200"
      role="img"
      aria-label={title}
      focusable="false"
    >
      <defs>
        <filter id={`${title}-soft-shadow`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="10" stdDeviation="6" floodColor="#4f3f2b" floodOpacity="0.2" />
        </filter>
      </defs>
      {children}
    </svg>
  );
}

export function KitchenRoomBuilding() {
  return (
    <SvgShell title="kitchen-room" className="kitchen-building">
      <ellipse cx="130" cy="170" rx="98" ry="18" fill="#655232" opacity=".18" />
      <g filter="url(#kitchen-room-soft-shadow)">
        <path d="M52 84 L93 46 H192 L224 83 L209 151 H68 Z" fill="#fff0d8" />
        <path d="M52 84 L93 46 H192 L224 83 L148 97 Z" fill="#ff9d74" />
        <path d="M78 88 H215 L209 151 H69 Z" fill="#ffe8bf" />
        <path d="M47 88 L148 99 L228 83 L223 99 L148 116 L49 104 Z" fill="#f56c59" />
        <path d="M83 95 L204 95 L198 144 L87 150 Z" fill="#fff6df" />
        <rect x="105" y="111" width="38" height="39" rx="5" fill="#69b4d8" />
        <rect x="151" y="108" width="38" height="28" rx="4" fill="#9bd6ec" />
        <path d="M105 130 H143 M124 111 V150 M151 122 H189 M170 108 V136" stroke="#fff7e9" strokeWidth="4" />
        <path d="M88 151 H204 L214 161 H76 Z" fill="#d8754e" />
        <rect x="75" y="132" width="132" height="23" rx="5" fill="#f7b55d" />
        <circle cx="96" cy="143" r="6" fill="#ffe9a6" />
        <circle cx="122" cy="143" r="6" fill="#ff7f66" />
        <circle cx="148" cy="143" r="6" fill="#85cc65" />
        <circle cx="174" cy="143" r="6" fill="#ffe9a6" />
        <rect x="67" y="66" width="31" height="16" rx="4" fill="#e34f4b" />
        <rect x="72" y="53" width="20" height="17" rx="3" fill="#f2c05a" />
        <path d="M75 53 C80 42 91 43 92 53" fill="#fff2c5" />
        <rect x="194" y="65" width="15" height="22" rx="3" fill="#70513a" />
        <path d="M197 58 H207 L211 66 H193 Z" fill="#3e4437" />
        <path d="M66 118 Q54 113 48 124 T33 128" fill="none" stroke="#7bc66a" strokeWidth="7" strokeLinecap="round" />
        <circle cx="40" cy="121" r="8" fill="#ffcc73" />
      </g>
    </SvgShell>
  );
}

export function WorkRoomBuilding() {
  return (
    <SvgShell title="work-room" className="work-building">
      <ellipse cx="132" cy="171" rx="105" ry="19" fill="#41516c" opacity=".18" />
      <g filter="url(#work-room-soft-shadow)">
        <path d="M48 91 L91 57 H197 L229 90 L209 158 H63 Z" fill="#e7eef8" />
        <path d="M91 57 H197 L229 90 L145 105 L48 91 Z" fill="#596d8b" />
        <path d="M61 93 L145 108 L145 160 L63 158 Z" fill="#f5f7f4" />
        <path d="M145 108 L229 91 L209 158 L145 160 Z" fill="#d8e5f2" />
        <path d="M80 104 H126 V135 H80 Z" fill="#8fd3ff" />
        <path d="M158 106 H200 V134 H158 Z" fill="#92e6d5" />
        <path d="M103 104 V135 M80 120 H126 M179 106 V134 M158 120 H200" stroke="#fff" strokeWidth="4" />
        <rect x="92" y="139" width="35" height="20" rx="4" fill="#465a75" />
        <rect x="155" y="138" width="44" height="18" rx="4" fill="#51627c" />
        <rect x="76" y="78" width="63" height="18" rx="5" fill="#ffe27a" />
        <path d="M88 87 H126" stroke="#705b37" strokeWidth="4" strokeLinecap="round" />
        <circle cx="213" cy="141" r="11" fill="#ff8d5c" />
        <path d="M213 130 V116 M202 141 H188" stroke="#ffcf62" strokeWidth="5" strokeLinecap="round" />
        <rect x="38" y="129" width="28" height="34" rx="5" fill="#3f4b5d" />
        <path d="M45 139 H60 M45 149 H57" stroke="#8fd3ff" strokeWidth="4" strokeLinecap="round" />
      </g>
    </SvgShell>
  );
}

export function GymRoomBuilding() {
  return (
    <SvgShell title="gym-room" className="gym-building">
      <ellipse cx="132" cy="171" rx="92" ry="18" fill="#3d5b43" opacity=".16" />
      <g filter="url(#gym-room-soft-shadow)">
        <path d="M54 92 L98 59 H194 L225 91 L206 154 H68 Z" fill="#eaffdf" />
        <path d="M54 92 L98 59 H194 L225 91 L145 107 Z" fill="#42b883" />
        <path d="M72 96 L145 111 L145 156 L68 154 Z" fill="#f5ffe9" />
        <path d="M145 111 L223 94 L206 154 L145 156 Z" fill="#d7f7c4" />
        <rect x="87" y="112" width="43" height="35" rx="5" fill="#93d2ff" />
        <path d="M87 130 H130 M108 112 V147" stroke="#fff" strokeWidth="4" />
        <rect x="157" y="115" width="41" height="26" rx="5" fill="#ffe083" />
        <path d="M158 128 H198 M178 115 V141" stroke="#fff7d2" strokeWidth="4" />
        <circle cx="206" cy="102" r="13" fill="#ff7f5c" />
        <path d="M206 89 V69 M193 74 H219" stroke="#375f55" strokeWidth="7" strokeLinecap="round" />
        <rect x="72" y="73" width="61" height="18" rx="8" fill="#2d8068" />
        <path d="M85 82 H121" stroke="#ffe878" strokeWidth="4" strokeLinecap="round" />
        <path d="M51 149 H78 M181 154 H218" stroke="#3d8068" strokeWidth="10" strokeLinecap="round" />
        <circle cx="52" cy="149" r="9" fill="#ffd760" />
        <circle cx="218" cy="154" r="9" fill="#ffd760" />
      </g>
    </SvgShell>
  );
}

export function RelaxRoomBuilding() {
  return (
    <SvgShell title="relax-room" className="relax-building">
      <ellipse cx="132" cy="172" rx="103" ry="18" fill="#4d345f" opacity=".2" />
      <g filter="url(#relax-room-soft-shadow)">
        <path d="M47 97 L91 57 H194 L229 96 L210 158 H63 Z" fill="#50356c" />
        <path d="M47 97 L91 57 H194 L229 96 L146 113 Z" fill="#8042c7" />
        <path d="M63 100 L146 116 L146 160 L63 158 Z" fill="#5f3b82" />
        <path d="M146 116 L229 98 L210 158 L146 160 Z" fill="#40295f" />
        <rect x="83" y="118" width="44" height="26" rx="6" fill="#ff7ea8" />
        <rect x="91" y="108" width="26" height="16" rx="5" fill="#ff9ebc" />
        <rect x="158" y="112" width="39" height="36" rx="5" fill="#27365c" />
        <path d="M166 123 H189 M166 134 H184" stroke="#7af0ff" strokeWidth="4" strokeLinecap="round" />
        <circle cx="198" cy="88" r="15" fill="#ffcf54" />
        <path d="M198 74 V62 M186 88 H175 M210 88 H222" stroke="#ff8ad4" strokeWidth="5" strokeLinecap="round" />
        <rect x="73" y="77" width="60" height="18" rx="5" fill="#1e2750" />
        <path d="M83 86 H99 M107 86 H124" stroke="#ffdd62" strokeWidth="4" strokeLinecap="round" />
        <path d="M54 150 C72 139 87 153 101 143" stroke="#8fef7" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M162 156 C179 145 191 158 209 149" stroke="#ff8ad4" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </SvgShell>
  );
}

export function LibraryRoomBuilding() {
  return (
    <SvgShell title="library-room" className="library-building">
      <ellipse cx="132" cy="171" rx="89" ry="17" fill="#6a5031" opacity=".18" />
      <g filter="url(#library-room-soft-shadow)">
        <path d="M60 87 L101 51 H190 L220 86 L205 154 H70 Z" fill="#f7dfb0" />
        <path d="M60 87 L101 51 H190 L220 86 L143 102 Z" fill="#c97536" />
        <path d="M74 90 L143 105 L143 156 L70 154 Z" fill="#ffe8b8" />
        <path d="M143 105 L220 88 L205 154 L143 156 Z" fill="#f0cc8d" />
        <rect x="94" y="107" width="32" height="48" rx="5" fill="#8b5632" />
        <circle cx="118" cy="131" r="3" fill="#ffd46b" />
        <rect x="151" y="108" width="41" height="32" rx="4" fill="#8ec8e6" />
        <path d="M151 124 H192 M172 108 V140" stroke="#fff4d2" strokeWidth="4" />
        <rect x="81" y="72" width="57" height="18" rx="5" fill="#6d472b" />
        <path d="M90 81 H129" stroke="#ffdf75" strokeWidth="4" strokeLinecap="round" />
        <path d="M197 70 L210 57 L222 70 L220 94 L199 98 Z" fill="#79bf6c" />
        <path d="M204 80 H217" stroke="#f6ffd8" strokeWidth="4" strokeLinecap="round" />
        <rect x="52" y="133" width="28" height="23" rx="4" fill="#c68a44" />
        <path d="M57 141 H75 M57 150 H71" stroke="#fff1bb" strokeWidth="3" strokeLinecap="round" />
      </g>
    </SvgShell>
  );
}

export const buildingComponents = {
  kitchenRoom: KitchenRoomBuilding,
  workRoom: WorkRoomBuilding,
  gymRoom: GymRoomBuilding,
  relaxRoom: RelaxRoomBuilding,
  libraryRoom: LibraryRoomBuilding,
};
