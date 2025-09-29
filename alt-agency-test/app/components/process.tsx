import Image from "next/image";
import ProcessInto from "../images/process-into-frustration.jpg";

export default function Process() {
	return (
		<div className="flex container mx-auto bg-alt-magenta text-white mt-20">
			<Image src={ProcessInto} width={870} height={651} alt="Process Into Frustration" className="w-[50%] h-[650px] bg-alt-magenta" />
			<div className="w-[50%] h-[650px] flex items-center justify-center flex-col">
				<h3 className="w-[546px] text-[50px] font-bold leading-[58px]">Turning process frustration into progress since 1996</h3>
				<p className="font-plexmono w-[541px] mt-8">Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.  Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.</p>
			</div>
		</div>
	);
}
