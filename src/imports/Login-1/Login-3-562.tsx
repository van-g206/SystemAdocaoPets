import svgPaths from "./svg-qxtiy5oxez";

function Item() {
  return (
    <div className="bg-[#e1c78c] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Item 1">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">LOGIN</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Item 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">CADASTRAR</p>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-name="Segmented control">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Item />
      <Item1 />
    </div>
  );
}

function Component06TabList({ className }: { className?: string }) {
  return (
    <div className={className || "absolute content-stretch flex h-[40px] items-start left-[633px] top-[29px] w-[210px]"} data-name="06 Tab list">
      <SegmentedControl />
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[216px] left-[458px] top-[252px] w-[90px]" />;
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center whitespace-nowrap" data-name="Copy">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[26px] tracking-[-0.26px]">Login</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[18px]">Faça login com o email</p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#828282] text-[22px] text-ellipsis whitespace-nowrap">email@gmail.com</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#828282] text-[22px] text-ellipsis whitespace-nowrap">password</p>
    </div>
  );
}

function Button({ className }: { className?: string }) {
  return (
    <button className={className || "bg-[#754907] content-stretch cursor-pointer flex h-[40px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0 w-[400px]"} data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-left text-white whitespace-nowrap">
        <p className="leading-[1.5]">Cadastrar com o email</p>
      </div>
    </button>
  );
}

function InputAndButton() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Input and  button">
      <Field />
      <Field1 />
      <Button />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="bg-[#e6e6e6] flex-[1_0_0] h-px min-w-px relative" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#828282] text-[18px] text-center whitespace-nowrap">Ou continue com</p>
      <div className="bg-[#e6e6e6] flex-[1_0_0] h-px min-w-px relative" />
    </div>
  );
}

function Google() {
  return (
    <div className="absolute left-[14px] size-[20px] top-[10px]" data-name="Google">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1198)" id="Google">
          <path d={svgPaths.p16dc8a40} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p15123a40} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p28bf8e80} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.pe56ea40} fill="var(--fill-0, #EB4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1198">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#eee] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[172.5px] not-italic text-[18px] text-black top-[20.5px] whitespace-nowrap">
        <p className="leading-[1.5]">Google</p>
      </div>
      <Google />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+64px)] top-[calc(50%+0.5px)] w-[400px]" data-name="Content">
      <Copy />
      <InputAndButton />
      <Divider />
      <Button1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[0px] text-center w-[min-content]">
        <span className="leading-[1.5] text-[18px]">{`By clicking continue, you agree to our `}</span>
        <span className="leading-[1.5] text-[18px] text-black">Terms of Service</span>
        <span className="leading-[1.5] text-[18px]">{` and `}</span>
        <span className="leading-[1.5] text-[18px] text-black">Privacy Policy</span>
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[204px] leading-[0] left-[487px] not-italic overflow-clip text-[21px] text-black top-[337px] w-[175px]">
      <div className="-translate-y-1/2 absolute flex flex-col h-[32px] justify-center left-[47px] top-[64px] w-[113px]">
        <p className="leading-[1.5]">E-mail</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[31px] justify-center left-[42px] top-[120.5px] w-[133px]">
        <p className="leading-[1.5]">Senha</p>
      </div>
    </div>
  );
}

function IconPets() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets1() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets2() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets3() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets4() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets5() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[850px] left-[59px] overflow-clip top-[10px] w-[274px]">
      <div className="absolute flex inset-[6.45%_6.71%_84.16%_64.17%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-17.9704cqw,82.0296cqh)] rotate-[12.36deg] w-[hypot(82.0296cqw,17.9704cqh)]">
          <IconPets />
        </div>
      </div>
      <div className="absolute flex inset-[56.35%_61.7%_34.12%_8.76%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(19.5858cqw,80.4142cqh)] rotate-[-13.69deg] w-[hypot(80.4142cqw,-19.5858cqh)]">
          <IconPets1 />
        </div>
      </div>
      <div className="absolute flex inset-[84.92%_38.47%_4.52%_28.77%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(33.1289cqw,66.8711cqh)] rotate-[-26.35deg] w-[hypot(66.8711cqw,-33.1289cqh)]">
          <IconPets2 />
        </div>
      </div>
      <div className="absolute flex inset-[22.82%_66.53%_68.15%_5.47%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(13.7273cqw,86.2727cqh)] rotate-[-9.04deg] w-[hypot(86.2727cqw,-13.7273cqh)]">
          <IconPets3 />
        </div>
      </div>
      <div className="absolute flex inset-[66.94%_6.38%_23.7%_64.6%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-17.5878cqw,82.4122cqh)] rotate-[12.05deg] w-[hypot(82.4122cqw,17.5878cqh)]">
          <IconPets4 />
        </div>
      </div>
      <div className="absolute flex inset-[40.35%_8.51%_50.98%_64.6%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-9.56367cqw,90.4363cqh)] rotate-[6.04deg] w-[hypot(90.4363cqw,9.56367cqh)]">
          <IconPets5 />
        </div>
      </div>
    </div>
  );
}

function IconPets6() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets7() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets8() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets9() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets10() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function IconPets11() {
  return (
    <div className="relative size-full" data-name="🦆 icon 'pets'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
        <g id="ð¦ icon 'pets'">
          <g id="Vector" />
          <path d={svgPaths.p536280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1452d800} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p11d66380} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22f82f80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1c454200} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[850px] left-[1156px] overflow-clip top-[16px] w-[274px]">
      <div className="absolute flex inset-[6.45%_6.71%_84.16%_64.17%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-17.9704cqw,82.0296cqh)] rotate-[12.36deg] w-[hypot(82.0296cqw,17.9704cqh)]">
          <IconPets6 />
        </div>
      </div>
      <div className="absolute flex inset-[56.35%_61.7%_34.12%_8.76%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(19.5858cqw,80.4142cqh)] rotate-[-13.69deg] w-[hypot(80.4142cqw,-19.5858cqh)]">
          <IconPets7 />
        </div>
      </div>
      <div className="absolute flex inset-[84.92%_38.47%_4.52%_28.77%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(33.1289cqw,66.8711cqh)] rotate-[-26.35deg] w-[hypot(66.8711cqw,-33.1289cqh)]">
          <IconPets8 />
        </div>
      </div>
      <div className="absolute flex inset-[22.82%_66.53%_68.15%_5.47%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(13.7273cqw,86.2727cqh)] rotate-[-9.04deg] w-[hypot(86.2727cqw,-13.7273cqh)]">
          <IconPets9 />
        </div>
      </div>
      <div className="absolute flex inset-[66.94%_6.38%_23.7%_64.6%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-17.5878cqw,82.4122cqh)] rotate-[12.05deg] w-[hypot(82.4122cqw,17.5878cqh)]">
          <IconPets10 />
        </div>
      </div>
      <div className="absolute flex inset-[40.35%_8.51%_50.98%_64.6%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-9.56367cqw,90.4363cqh)] rotate-[6.04deg] w-[hypot(90.4363cqw,9.56367cqh)]">
          <IconPets11 />
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#e4dcdc] border-2 border-black border-solid relative size-full" data-name="Login">
      <Component06TabList />
      <div className="absolute flex h-[40px] items-center justify-center left-[708px] top-[69px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Line 5" stroke="var(--stroke-0, black)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame />
      <div className="absolute bg-[rgba(7,7,7,0.5)] h-[767px] left-[392px] rounded-[90px] top-[97px] w-[731px]" />
      <Content />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}