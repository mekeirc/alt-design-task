import Image from "next/image";
import Link from "next/link";
import Logo from "../images/dns-logo-white.png";
import HeroSide from "../images/hero-side.svg";
import HeroGeometric from "../images/hero-geometric.svg";
import HeroServices from "../images/hero-services.svg";
import HeroPrint from "../images/hero-print-services.svg";
import HeroDocument from "../images/hero-document-management.svg";
import HeroCommunications from "../images/hero-communications.svg";

export default function Hero() {
	return (
		<>
			<div className="flex bg-alt-navy p-6 w-full nav h-[80vh] overflow-hidden pb-2">
				<div className="flex container mx-auto justify-between font-medium items-start">
					<div className="flex flex-col h-[80vh]">
						<div className="flex gap-16">
							<Link href="/" className="flex" title="Home">
								<Image src={Logo} alt="Logo" width={133} height={82} className="logo" />
							</Link>
							<div className="flex flex-col">
								<div className="flex gap-8 text-[13px] text-white font-plexmono items-start">
									<Link href="tel:08450340895" title="Call" className="hover:underline">
										0845 034 0895
									</Link>
									<Link href="#" title="About Us" className="hover:underline">
										About Us
									</Link>
									<Link href="#" title="Careers" className="hover:underline">
										Careers
									</Link>
								</div>
								<div className="text-white text-[18px] font-gilroy font-bold pt-[35px]">
									<Link href="#" title="Services" className="pe-[37px] hover:underline">
										Services
									</Link>
									<Link href="#" title="Case Studies" className="pe-[37px] hover:underline">
										Case Studies
									</Link>
									<Link href="#" title="Insights" className="pe-[37px] hover:underline">
										Insights
									</Link>
									<Link href="#" title="Contact" className="pe-[37px] hover:underline">
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="flex flex-col text-white text-gilroy text-[70px] mt-[170px]">
							<h1 className="p-0 m-0 font-bold">We make your</h1>
							<h1 className="p-0 m-0 font-bold leading-[40px]">IT work easy</h1>
							<p className="font-plexmono text-[16px] font-normal leading-[30px] mt-[25px]">
								Recognising your frustrations with your print environment,
							</p>
							<p className="font-plexmono text-[16px] font-normal leading-[30px]">
								IT services, document management & communications and
							</p>
							<p className="font-plexmono text-[16px] font-normal leading-[30px]">
								finding a solution to overcome them.
							</p>
						</div>
					</div>
					<div className="flex flex-col font-plexmono items-end">
						<Link href="#" title="Request Support" className="text-[13px] text-white hover:underline">
							Request support
						</Link>
						<Link
							href="tel:08450340895"
							title="Call Me Back"
							className="bg-white text-[#48307F] py-[10px] px-[28.5px] mt-[20px] font-gilroy font-bold rounded text-center text-[18px]"
						>
							Call Me Back
						</Link>
						<div className="mt-[170px]">
							<Image
								src={HeroSide}
								width={489}
								height={410}
								alt="Picture of the author"
								className="h-[410px]"
							/>
						</div>
					</div>
				</div>
				<Image
					src={HeroGeometric}
					width={1348}
					height={1501}
					alt="Geometric Pattern"
					className="h-[1501px] absolute right-0 top-[-31px]"
				/>
			</div>
			<div className="w-full flex justify-center z-1 mt-[-110px] mb-8 gap-[38px]">
				<div className="w-[284px] h-[345px] bg-alt-pink text-white p-4 flex justify-center items-center flex-col rounded shadow-md">
					<Image src={HeroServices} width={50} height={44} alt="IT Services" className="h-[50px] mb-3" />
					<h3 className="text-[21px] font-gilroy font-bold">IT Services</h3>
					<p className="font-plexmono mt-2 text-[12px] text-center leading-[23px]">
						Recognising your frustrations with your print environment, IT services, document management &
						communications and finding a solution to overcome them.
					</p>
					<Link href="#" title="Learn More" className="font-plexmono text-[12px] mt-[18px]">
						Learn More
					</Link>
				</div>
				<div className="w-[284px] h-[345px] bg-white text-white p-4 flex justify-center items-center flex-col rounded shadow-xl">
					<Image
						src={HeroPrint}
						width={45}
						height={45}
						alt="Picture of the author"
						className="h-[45px] mb-3"
					/>
					<h3 className="text-[21px] font-gilroy font-bold text-alt-pink">Managed Print Services</h3>
					<p className="font-plexmono mt-2 text-[12px] text-center leading-[23px] text-black">
						Recognising your frustrations with your print environment, IT services, document management &
						communications and finding a solution to overcome them.
					</p>
					<Link href="#" title="Learn More" className="font-plexmono text-alt-pink text-[12px] mt-[18px]">
						Learn More
					</Link>
				</div>
				<div className="w-[284px] h-[345px] bg-white text-white p-4 flex justify-center items-center flex-col rounded shadow-xl">
					<Image
						src={HeroDocument}
						width={37}
						height={38}
						alt="Picture of the author"
						className="h-[38px] mb-3"
					/>
					<h3 className="text-[21px] font-gilroy font-bold text-alt-pink">Document Management</h3>
					<p className="font-plexmono mt-2 text-[12px] text-center leading-[23px] text-black">
						Recognising your frustrations with your print environment, IT services, document management &
						communications and finding a solution to overcome them.
					</p>
					<Link href="#" title="Learn More" className="font-plexmono text-alt-pink text-[12px] mt-[18px]">
						Learn More
					</Link>
				</div>
				<div className="w-[284px] h-[345px] bg-white text-white p-4 flex justify-center items-center flex-col rounded shadow-xl">
					<Image
						src={HeroCommunications}
						width={39}
						height={39}
						alt="Picture of the author"
						className="h-[39px] mb-3"
					/>
					<h3 className="text-[21px] font-gilroy font-bold text-alt-pink">Communications</h3>
					<p className="font-plexmono mt-2 text-[12px] text-center leading-[23px] text-black">
						Recognising your frustrations with your print environment, IT services, document management &
						communications and finding a solution to overcome them.
					</p>
					<Link href="#" title="Learn More" className="font-plexmono text-alt-pink text-[12px] mt-[18px]">
						Learn More
					</Link>
				</div>
			</div>
		</>
	);
}
