import Image from "next/image";
import IconCalendar from "../images/icon-calendar.svg";
import IconSupport from "../images/icon-support.svg";
import IconTeam from "../images/icon-team.svg";
import IconContracts from "../images/icon-contracts.svg";
import IconTraining from "../images/icon-training.svg";
import IconAwards from "../images/icon-awards.svg";


export default function TeamOfExperts() {
	return (
		<div className="container mx-auto w-full pt-20 pb-30 flex flex-col items-center text-center">
			<div className="w-[969px] text-[40px] font-bold leading-[48px]">
				<h3>A team of accredited experts</h3>
				<h3>that support you</h3>
			</div>
			<div className="flex items-center justify-center mt-16 gap-[115px]">
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconCalendar} width={92} height={85} alt="Xerox Logo" className="h-[85px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">Business years</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconSupport} width={82} height={82} alt="Xerox Logo" className="h-[82px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">On-site support</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconTeam} width={105} height={100} alt="Xerox Logo" className="h-[100px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">Expert Team Members</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
			</div>
			<div className="flex items-center justify-center mt-16 gap-[115px]">
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconContracts} width={130} height={86} alt="Xerox Logo" className="h-[86px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">Live Contracts</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconTraining} width={80} height={80} alt="Xerox Logo" className="h-[80px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">Guided training</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
				<div className="w-[275px] flex flex-col items-center justify-center">
					<Image src={IconAwards} width={100} height={89} alt="Xerox Logo" className="h-[89px]" />
					<p className="text-[20px] font-semibold pt-5 pb-1">Accreditations & awards</p>
					<p className="font-plexmono text-[12px] leading-[26px]">Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.</p>
				</div>
			</div>
		</div>
	);
}

