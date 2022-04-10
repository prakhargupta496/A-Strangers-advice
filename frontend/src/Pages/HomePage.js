import React from "react";
// import "./styles.css";
import { Link } from "react-router-dom";
import Above from "../Components/aboveHome";
import CounselHome from "../Components/images/listen.jpg";
import Video from "../Components/images/girl.mp4";
import "../CSS/home.css";

function HomePage() {
	return (
		<React.Fragment>
			<div className='homepage'>
				<div className='front-top'>
					<div
						data-poster-url='https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/605905e7e0e3ca7eaa7af26d_girl-on-phone-poster-00001.jpg'
						data-video-urls='https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/605905e7e0e3ca7eaa7af26d_girl-on-phone-transcode.mp4,https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/605905e7e0e3ca7eaa7af26d_girl-on-phone-transcode.webm'
						data-autoplay={true}
						data-loop={true}
						data-wf-ignore={true}
						className='video_div'>
						<video
							autoPlay={true}
							loop={true}
							muted=''
							playsInline=''
							data-wf-ignore={true}
							disablePictureInPicture={true}
							className='video-name-here'>
							<source src={Video} data-wf-ignore={true} />
							<source
								src='https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/605905e7e0e3ca7eaa7af26d_girl-on-phone-transcode.webm'
								data-wf-ignore={true}
							/>
						</video>
					</div>
					<Above />
				</div>
				{/* <CounselPage /> */}
				<div className='front-bot'>
					<div>
						<span className='bot-heading'>Need Someone to talk to?</span>
					</div>
					<Link to='/counsel' className='link-counsel'>
						<div className='bot-desc'>
							<span>We Are here to</span>
							<span>
								<img src={CounselHome} alt='img' className='bot-image' />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
