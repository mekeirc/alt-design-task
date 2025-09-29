import Image from "next/image";
import MicrosoftLoop from "../images/promo-microsoft-loop.png";
import XeroxPromo from "../images/promo-xerox-technology.png";
import Link from "next/link";
import Geometric from "../images/geometric-black.svg";

export default function Insights() {
	return (
		<div className="container mx-auto flex items-start justify-center bg-black text-white p-30 gap-[37px]">
			<div className="flex flex-col w-[50%]">
				<h3 className="text-[40px] font-bold">Insights &amp; News</h3>
				<Link href="/" title="Microsoft Loop" className="mt-6">
					<Image src={MicrosoftLoop} width={602} height={245} alt="Microsoft Logo" className="h-[245px] w-full" />
					<div className="flex flex-col text-white mt-6">
						<p className="font-plexmono">15/06/2024</p>
						<p className="text-[25px] font-bold mt-1">What is Microsoft Loop and how does it work</p>
					</div>
				</Link>
				<div className="flex pt-16 gap-[30px]">
					<div className="w-[50%]">
						<Link href="/" title="Microsoft Loop" className="mt-6">
						<Image src={XeroxPromo} width={289} height={194} alt="Microsoft Logo" className="h-[194px] w-full" />
							<div className="flex flex-col text-white mt-6">
								<p className="font-plexmono">15/06/2024</p>
								<p className="text-[25px] font-bold mt-1">Boost productivity within your law firm with xerox technology</p>
							</div>
						</Link>
					</div>
					<div className="w-[50%]">
						<Link href="/" title="Microsoft Loop" className="mt-6">
						<Image src={MicrosoftLoop} width={289} height={194} alt="Microsoft Logo" className="h-[194px] w-full" />
							<div className="flex flex-col text-white mt-6">
								<p className="font-plexmono">15/06/2024</p>
								<p className="text-[25px] font-bold mt-1">What is Microsoft Loop and how does it work</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-[50%]">
				<h3 className="text-[40px] font-bold mb-6">FAQ`s</h3>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you offer 24h support?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Can I upgrade my support package?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you offer 24h support?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[23px] leading-[45px] border-t-2 border-white/20 py-3">
					<p>Do you sell Xerox printers?</p>
					<p>&#43;</p>
				</div>
				<div className="flex justify-between text-[12px] border-t-2 border-white/20 py-6 font-plexmono underline">
					<p>View all FAQs</p>
				</div>
			</div>
			<Image
				src={Geometric}
				width={1348}
				height={1348}
				alt="Geometric"
				className="h-[1348px] absolute right-[400px] top-[2806px]"
			/>
		</div>
	);
}

