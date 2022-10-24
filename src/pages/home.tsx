import { FC } from 'react';
import RootPage from './root';

// TODO: to deploy media file to cloudinary
const url = 'https://rr5---sn-hc57enee.googlevideo.com/videoplayback?expire=1666628341&ei=lWZWY6q6Es2p7gO73YmACA&ip=176.125.230.41&id=o-AJKnvYlkSAtTB3n7hcSqmWQFv7ADPFZGM3I02avgFjYV&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=yR2vp1vH5Qk-Nb79UtwP39ptb6Axp7U&vprv=1&mime=video%2Fwebm&ns=vQdMhfmeO-JBvHs52jiiOX0I&gir=yes&clen=5033365&dur=122.955&lmt=1649912934859577&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=4535434&n=-etEZfcpLmPctw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAP8V8qwgDNQPlhrWmB30SIs4Rc_lKbzxLYuvEwIR_pgpAiAHqLA4MgUuVKG_5IvCR4cO3TofZBRr8rvDMnZeMHhJEw%3D%3D&rm=sn-aigesy7s&req_id=c14656e931aba3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-ap90pquxaxjvh-3bae7e&cms_redirect=yes&cmsv=e&mh=2c&mip=2c0f:fe30:3b86:0:8ce1:c3fe:a981:9a6d&mm=29&mn=sn-hc57enee&ms=rdu&mt=1666606665&mv=m&mvi=5&pl=40&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAP5jk1SCSGV0EU47K2hPRDcjvb_-tkkpYHWZBCyClEd1AiB2M_6e5XmAwJGM6D6Atdy7sxDHQRJXS8q0g71h3ecbEA%3D%3D';

const Home: FC = () => {
	return (
		<RootPage header='home'>
			<section className="relative flex flex-col items-center justify-center h-screen px-3 py-0 text-center text-white">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden video-docker">
					<video className="absolute object-cover min-w-full min-h-full" src={url} data-type="video/mp4" autoPlay muted loop></video>
				</div>
				<div className="space-y-2 video-content">
					<h1 className="text-6xl font-bold">Game of Thrones</h1>
					<h3 className="text-3xl font-light">8 SEASONS | 73 EPISODES</h3>
				</div>
			</section>
		</RootPage>
	)
}

export default Home;