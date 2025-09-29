import Image from "next/image";
import LogoXerox from "../images/logo-xerox.svg";
import LogoMicrosoft from "../images/logo-microsoft.svg";
import LogoHp from "../images/logo-hp.svg";
import Logo3cx from "../images/logo-3cx.svg";
import LogoVipre from "../images/logo-vipre.svg";
import LogoFortinet from "../images/logo-fortinet.svg";

export default function LogoArea() {
	return (
		<div className="flex gap-[20px] container items-center justify-center flex-col mx-auto">
			<p className="font-plexmono pb-6 pt-16">Our Clients Include</p>
			<div className="flex gap-[90px] items-center">
				<Image src={LogoXerox} width={100} height={20} alt="Xerox Logo" className="h-[20px]" />
				<Image src={LogoMicrosoft} width={139} height={29} alt="Microsoft Logo" className="h-[29px]" />
				<Image src={LogoHp} width={40} height={40} alt="Microsoft Logo" className="h-[40px]" />
				<Image src={Logo3cx} width={81} height={29} alt="Microsoft Logo" className="h-[29px]" />
				<Image src={LogoVipre} width={134} height={25} alt="Microsoft Logo" className="h-[25px]" />
				<Image src={LogoFortinet} width={177} height={20} alt="Microsoft Logo" className="h-[20px]" />
			</div>
		</div>
	);
}
