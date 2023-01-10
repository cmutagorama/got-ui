import { FC } from 'react';
import RootPage from './root';

// TODO: to deploy media file to cloudinary
const url = 'https://rr3---sn-2gb7sn7y.googlevideo.com/videoplayback?expire=1673366147&ei=Iza9Y8HVKLvEx_APnKexqAs&ip=77.48.200.174&id=o-AH-qYVhh3xWRvmubcXUVlebNmaCUaxfIyZcHf-e4k6Q6&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&spc=zIddbPjl2sFlS75Su_Z9NVfwBVpPc3A&vprv=1&mime=video%2Fwebm&ns=eLRG4m8rTskZJtehN-6irzAK&gir=yes&clen=12657818&dur=208.082&lmt=1649875959206533&keepalive=yes&fexp=24007246&c=WEB&txp=4535434&n=_4o9jBPscJaa0w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYPcXPj1fkyq4iaoPBnbWuaDDRNIlRdT5jQ1TyRXVI6ICIQDREV658Gw66tnDc_6hl1AL3XWTIVlrFIJB_l2wJICqNA%3D%3D&redirect_counter=1&rm=sn-8vq54voxj1-2gbs7e&req_id=4a3945cf11a2a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Cw&mm=29&mn=sn-2gb7sn7y&ms=rdu&mt=1673344419&mv=m&mvi=3&pl=20&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMqoANDjV7ReQ7hyoy326OEdZWoks9jUDJmmksgnmgJuAiEA-sKpyNadm4fh7GKlC6ag4RQ4M00bMf_jTbGcb5rJOpE%3D';

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