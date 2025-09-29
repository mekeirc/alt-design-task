import Image from "next/image";
import Logo from "../images/dns-logo-white.png";
import Geometric from "../images/geometric-footer.svg";

export default function Footer() {
	return (
		<footer className="w-full pt-30 h-[910px] bg-alt-coral relative overflow-hidden">
			<div className="container mx-auto flex flex-col text-white">
				<div className="flex justify-between">
					<div className="text-[60px] font-bold leading-[70px]">
						<h3>
							We&apos;re <span className="text-stroke text-alt-coral pe-4">your</span>IT Services
						</h3>
						<h3>Problem Solvers</h3>
						<p className="font-plexmono text-[16px] font-normal leading-[30px] w-[596px] mt-1">
							Recognising your frustrations with your print environment, IT services, document management
							& communications and finding.
						</p>
						<p className="font-plexmono text-[16px] font-normal leading-[30px] w-[596px] mt-8">
							Get in touch today
						</p>
					</div>
					<div className="flex flex-col gap-[24px] items-end font-plexmono">
						<input className="w-[488px] h-[55px] border p-4 placeholder-white" placeholder="Name"></input>
						<input className="w-[488px] h-[55px] border p-4 placeholder-white" placeholder="Email"></input>
						<input
							className="w-[488px] h-[55px] border p-4 placeholder-white"
							placeholder="Telephone"
						></input>
						<input
							className="w-[488px] h-[55px] border p-4 placeholder-white"
							placeholder="Company"
						></input>
						<input
							className="w-[488px] h-[55px] border p-4 placeholder-white"
							placeholder="I need help with..."
						></input>
						<button className="w-[200px] h-[55px] text-[#3C2A7D] bg-white mt-1 hover:text-alt-coral">
							Submit Now
						</button>
					</div>
				</div>
				<div className="flex mt-30 font-plexmono text-[12px] justify-between">
					<Image
						src={Logo}
						width={94}
						height={57}
						className="h-[57px]"
						alt="Logo"
					/>
					<div className="flex flex-col gap-[8px]">
						<p>Contact Us</p>
						<p>E info@dnslimited.co.uk</p>
						<p>T 0845 034 0895</p>
					</div>
					<div className="flex flex-col gap-[8px]">
						<p>Address</p>
						<p>Unit 9,</p>
						<p>Royal Scot Road,</p>
						<p>Pride Park, Derby</p>
						<p>DE24 8AJ</p>
					</div>
					<div className="flex flex-col gap-[8px]">
						<p>Opening Hours</p>
						<p>Mon - Fri:</p>
						<p>9am - 5:30pm</p>
					</div>
					<div className="flex flex-col gap-[8px]">
						<p>About Us</p>
						<p>CSR</p>
						<p>Enivronment &amp; Sustainability</p>
						<p>Meet the team</p>
					</div>
					<div className="flex flex-col gap-[8px]">
						<p>Services</p>
						<p>IT Services</p>
						<p>Communications</p>
						<p>Managed Print Services</p>
						<p>Document Management</p>
					</div>
				</div>
				<div className="w-full flex justify-between border-t-1  border-white/15 py-6 mt-8 font-plexmono text-[11px]">
					<p>Design &amp; built by Alt</p>
					<p>&copy; Document Network Services Ltd 2024</p>
				</div>
			</div>
			<Image
				src={Geometric}
				width={1348}
				height={1348}
				alt="Geometric"
				className="h-[1348px] absolute left-[160px] bottom-[-200px] opacity-75"
			/>
		</footer>
	);
}
