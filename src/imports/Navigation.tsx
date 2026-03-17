import imgNavigation from "../../DK_Logo.png";

function Navigation1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Navigation">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNavigation} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#080808] text-[14px] top-[0.6px] tracking-[2.8px] uppercase whitespace-nowrap">Damodar Kamath</p>
    </div>
  );
}

function Text1() {
  return <div className="h-[15.988px] shrink-0 w-full" data-name="Text" />;
}

function Navigation2() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[48px] relative shrink-0 w-[233.7px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Navigation1 />
        <Navigation2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#d5d0d0] border-[0.8px] border-[rgba(0,212,255,0.5)] border-solid h-[37.6px] left-[429.02px] rounded-[26843500px] top-0 w-[103.213px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[51.5px] not-italic text-[#05c725] text-[14px] text-center top-[8.6px] tracking-[0.7px] uppercase whitespace-nowrap">Hire Me</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#ebeaea] h-px left-0 top-[23px] w-[45.188px]" data-name="Text" />;
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-0 top-[8.8px] w-[45.188px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] not-italic text-[#05c725] text-[14px] text-center top-[0.6px] tracking-[0.7px] uppercase whitespace-nowrap">Home</p>
      <Text2 />
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#00d4ff] h-px left-0 top-[23px] w-0" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-[77.19px] top-[8.8px] w-[52.862px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[26px] not-italic text-[#05c725] text-[14px] text-center top-[0.6px] tracking-[0.7px] uppercase whitespace-nowrap">About</p>
      <Text3 />
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#00d4ff] h-px left-0 top-[23px] w-0" data-name="Text" />;
}

function Button3() {
  return (
    <div className="absolute h-[20px] left-[162.05px] top-[8.8px] w-[51.563px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[26.5px] not-italic text-[#05c725] text-[14px] text-center top-[0.6px] tracking-[0.7px] uppercase whitespace-nowrap">Skills</p>
      <Text4 />
    </div>
  );
}

function Text5() {
  return <div className="absolute bg-[#00d4ff] h-px left-0 top-[23px] w-0" data-name="Text" />;
}

function Button4() {
  return (
    <div className="absolute h-[20px] left-[245.61px] top-[8.8px] w-[46.163px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] not-italic text-[#05c725] text-[14px] text-center top-[0.6px] tracking-[0.7px] uppercase whitespace-nowrap">Work</p>
      <Text5 />
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#00d4ff] h-px left-0 top-[23px] w-0" data-name="Text" />;
}

function Button5() {
  return (
    <div className="absolute h-[20px] left-[323.77px] top-[8.8px] w-[73.25px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37.5px] not-italic text-[#05c725] text-[14px] text-center top-[0.6px] tracking-[0.7px] uppercase whitespace-nowrap">Contact</p>
      <Text6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[37.6px] relative shrink-0 w-[532.237px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Link />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="bg-[#545353] content-stretch flex flex-col items-start pb-[0.8px] px-[32px] relative size-full" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(0,212,255,0.12)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}