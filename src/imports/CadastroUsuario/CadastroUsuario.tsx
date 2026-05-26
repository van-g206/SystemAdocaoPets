import svgPaths from "./svg-tdeq5jq9tm";

function Item() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Item 1">
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
    <div className="bg-[#e1c78c] content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-name="Segmented control">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Item />
      <Item1 />
    </div>
  );
}

function Frame1() {
  return <div className="absolute h-[7px] left-[18px] top-[67px] w-[164px]" />;
}

function Frame() {
  return (
    <div className="absolute left-[384px] overflow-clip size-[100px] top-[838px]">
      <Frame1 />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[208px]">
            <p className="leading-[1.5]">Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🦆 icon 'home'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð¦ icon 'home'">
          <path d={svgPaths.p357d7ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#e4dcdc] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p39768bb0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
            <p className="leading-[1.5] overflow-hidden text-ellipsis">Pesquisar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[8px] top-[78px] w-[240px]" data-name="List">
      <MenuItem />
      <div className="bg-[#e4dcdc] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
            <IconHome />
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
              <p className="leading-[1.5] overflow-hidden text-ellipsis">Home</p>
            </div>
          </div>
        </div>
      </div>
      <MenuItem1 />
    </div>
  );
}

function IconImage() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🦆 icon 'image'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð¦ icon 'image'">
          <path d={svgPaths.p3873400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconPerson() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="🦆 icon 'person'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ð¦ icon 'person'">
          <path d={svgPaths.p18b4b380} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="absolute bg-[#e4dcdc] content-stretch flex gap-[16px] h-[40px] items-center left-[8px] px-[16px] rounded-[8px] top-[246px] w-[240px]" data-name="Menu item">
      <IconPerson />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[1.5] overflow-hidden text-ellipsis">Perfil</p>
      </div>
    </div>
  );
}

function IconAccountLogout() {
  return (
    <div className="h-[23.537px] relative shrink-0 w-[24px]" data-name="🦆 icon 'account logout'">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.5373">
        <g id="ð¦ icon 'account logout'">
          <path d={svgPaths.p1e487300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="absolute bg-[#e4dcdc] content-stretch flex gap-[16px] h-[40px] items-center left-[8px] px-[16px] rounded-[8px] top-[322px] w-[240px]" data-name="Menu item">
      <IconAccountLogout />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[1.5] overflow-hidden text-ellipsis">Logout</p>
      </div>
    </div>
  );
}

function Component11Sidebar({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#e4dcdc] border-[#e0e0e0] border-r border-solid h-[909px] left-[749px] overflow-clip top-[1056px] w-[256px]"} data-name="11 Sidebar">
      <List />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[24px] not-italic text-[20px] text-black top-[39px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Menu</p>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[16px] h-[40px] items-center left-[8px] px-[16px] rounded-[8px] top-[206px] w-[240px]" data-name="Menu item">
        <IconImage />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
          <p className="leading-[1.5] overflow-hidden text-ellipsis">Galeria</p>
        </div>
      </div>
      <MenuItem2 />
      <MenuItem3 />
    </div>
  );
}

function Component05Tag() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[156px] px-[8px] py-[6px] rounded-[8px] top-[27px]" data-name="05 Tag">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Nome</p>
    </div>
  );
}

function Component05Tag1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-[154px] px-[8px] py-[6px] rounded-[8px] top-[90px]" data-name="05 Tag">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">E-mail</p>
    </div>
  );
}

function Component05Tag2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-[3px] px-[8px] py-[6px] rounded-[8px] top-[139px]" data-name="05 Tag">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Confirmação de e-mail</p>
    </div>
  );
}

function Component05Tag3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[28px] left-[164px] rounded-[8px] top-[189px] w-[77px]" data-name="05 Tag" />;
}

function Component05Tag4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-[12px] px-[8px] py-[6px] rounded-[8px] top-[253px] w-[234px]" data-name="05 Tag">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Confirmação de Senha</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[380px] left-[341px] overflow-clip top-[219px] w-[249px]">
      <Component05Tag />
      <Component05Tag1 />
      <Component05Tag2 />
      <Component05Tag3 />
      <Component05Tag4 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[171px] not-italic text-[20px] text-black top-[197px] whitespace-nowrap">Senha</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center whitespace-nowrap" data-name="Copy">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px] tracking-[-0.24px]">Criar conta</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Entre com o email para adotar/doar</p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#828282] text-[20px] text-ellipsis whitespace-nowrap">Nome e Sobrenome</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#828282] text-[20px] text-ellipsis whitespace-nowrap">email@gmail.com</p>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#828282] text-[20px] text-ellipsis whitespace-nowrap">email@gmail.com</p>
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#828282] text-[20px] text-ellipsis whitespace-nowrap">Password</p>
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] min-w-px not-italic overflow-hidden relative text-[#828282] text-[20px] text-ellipsis whitespace-nowrap">Password</p>
    </div>
  );
}

function Component06TabList() {
  return <div className="h-[40px] relative shrink-0 w-[140px]" data-name="06 Tab list" />;
}

function Item2() {
  return (
    <div className="bg-[#cf9856] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Item 1">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Adotar</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-[#c6652f] content-stretch flex h-[32px] items-center px-[12px] relative rounded-[4px] shrink-0" data-name="Item 2">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[1.5]">Doar</p>
      </div>
    </div>
  );
}

function SegmentedControl1({ className }: { className?: string }) {
  return (
    <div className={className || "-translate-y-1/2 absolute bg-[#f7f7f7] content-stretch flex items-start p-[4px] right-[124px] rounded-[8px] top-[calc(50%+112px)]"} data-name="Segmented control">
      <Item2 />
      <Item3 />
    </div>
  );
}

function Button({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#d78729] content-stretch flex h-[40px] items-center justify-center px-[16px] relative rounded-[8px] shrink-0 w-[400px]"} data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Cadastre com email</p>
      </div>
    </div>
  );
}

function InputAndButton() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Input and  button">
      <Field />
      <Field1 />
      <Field2 />
      <Field3 />
      <Field4 />
      <Component06TabList />
      <SegmentedControl1 />
      <Button />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="bg-[#e6e6e6] flex-[1_0_0] h-px min-w-px relative" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#828282] text-[16px] text-center whitespace-nowrap">Ou continue com</p>
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[172.5px] not-italic text-[16px] text-black top-[20px] whitespace-nowrap">
        <p className="leading-[1.5]">Google</p>
      </div>
      <Google />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] h-[784px] items-center left-[calc(50%+64px)] top-[calc(50%+98px)] w-[400px]" data-name="Content">
      <Copy />
      <InputAndButton />
      <Divider />
      <Button1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#828282] text-[16px] text-center w-[min-content]">
        <span className="leading-[1.5]">{`By clicking continue, you agree to our `}</span>
        <span className="leading-[1.5] text-black">Terms of Service</span>
        <span className="leading-[1.5]">{` and `}</span>
        <span className="leading-[1.5] text-black">Privacy Policy</span>
      </p>
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

function Frame3() {
  return (
    <div className="absolute h-[850px] left-[26px] overflow-clip top-[22px] w-[274px]">
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

function Frame4() {
  return (
    <div className="absolute h-[850px] left-[1156px] overflow-clip top-[22px] w-[274px]">
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

export default function CadastroUsuario() {
  return (
    <div className="bg-[#e4dcdc] border-2 border-black border-solid relative size-full" data-name="Cadastro  usuário">
      <div className="absolute content-stretch flex h-[40px] items-start left-[602px] top-[36px] w-[210px]" data-name="06 Tab list">
        <SegmentedControl />
      </div>
      <div className="absolute flex h-[40px] items-center justify-center left-[695px] top-[36px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
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
      <Component11Sidebar />
      <div className="absolute bg-[rgba(7,7,7,0.5)] h-[767px] left-[341px] rounded-[90px] top-[97px] w-[731px]" />
      <Frame2 />
      <Content />
      <Frame3 />
      <Frame4 />
    </div>
  );
}