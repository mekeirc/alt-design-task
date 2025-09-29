import Link from "next/link";

export default function CaseStudies() {
	return (
		<div className="h-[700px] container mx-auto mt-20 black-white">
			<div className="flex justify-between  text-white">
				<p className="font-bold text-[30px] text-[#0A151B]">Don’t just take our word for it...</p>
				<Link href="/" title="View all case studies" className="font-plexmono text-[12px] underline text-black mt-3">View all Case Studies</Link>
			</div>
			<div className="w-[1247px] h-[596px] mx-auto mt-6 bg-[url('images/forest-area.jpg')] rounded-lg p-18 text-white">
				<p className="text-[33px] font-bold w-[742px]">“We have been delighted with our DNS partnership. The club now has direction & delivery on all document processes with a clear road map for the foreseeable future.”</p>
				<div className="flex flex-col font-plexmono text-[12px] py-3 gap-[8px]">
					<p>Paul Johnson, Director</p>
					<p>Nottingham Forest Football Club</p>
				</div>
			</div>
		</div>
	);
}

