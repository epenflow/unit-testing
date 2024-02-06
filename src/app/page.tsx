import VideoReveal from '@/components/ScrollTrigger/VideoReveal/VideoReveal';
import CircleProgress from '@/components/ScrollProgress/CircleProgress';

export default function Home() {
	return (
		<>
			<main className='overflow-x-hidden relative w-screen'>
				<VideoReveal />
				<CircleProgress />
			</main>
			<footer className='w-screen h-[300vh]'>
				<h1>sds</h1>
			</footer>
		</>
	);
}
