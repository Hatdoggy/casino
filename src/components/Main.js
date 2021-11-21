import Spin,{Spinner} from '../svg.js'
import {end,pos} from '../func.js'
import { useMediaQuery } from 'react-responsive';

const Roulette = (props)=>{
	const small = useMediaQuery({
   		query: '(max-width : 640px)'
  	})
	return(	
		<section className={`flx flx-col flx-jc-sa flx-ai-ce w-70 txt-wht h-100 p-50 bg-img spinner`}>
			{small&&<img src="./img/logo.svg" alt="logo" className="w-50"/>}
			<Spinner stats={props.stats} pop={props.pop} end={props.end} txt={props.txt} upd={props.upd}/>
		</section>
	)
}

const Content = (props)=>{
	const {stats,pop,end,txt} = props;
	const {spins,cash} = stats;
	const data = window.data.pop;

	return(
				<div className="flx flx-col flx-jc-ce flx-ai-ce btn-cont bg-blue w-100 content">
					<div className="flx flx-jc-ce flx-ai-ce w-80">
						<span className="flx flx-jc-ce flx-ai-ce">
							<h4 className="rob txt-wht flx">{data.bal}R<span className="m-l-5 rob-bld rob txt-gld">{cash}</span></h4>
						</span>
						<span className="flx flx-jc-ce flx-ai-ce m-l-auto">
							<h4 className="rob txt-wht flx">{data.spins}<span className="m-l-5 rob-bld rob">{spins}</span></h4>
						</span>
					</div>
				</div>
	)
}

const Aside = (props)=>{
	const {roulette} = window.data;
	return(
		<aside className="flx flx-col flx-jc-ce flx-ai-ce w-30 txt-wht h-100 shdw-side bg-blue p-20">

			<section className="h-80 flx flx-col flx-jc-sb flx-ai-ce p-20 brd brd-wht2 fade-t">

			<div className="flx flx-col flx-jc-ce flx-ai-ce">
					<img src="./img/logo.svg" alt="logo" className="w-50"/>
					<p className="txt-al-ce txt-gld rob m-t-2">{roulette.top}</p>					
				</div>

				<div className="flx flx-col flx-jc-ce flx-ai-ce">
					<img src="./img/run.png" alt="walk" className="w-30"/>
					<p className="txt-al-ce txt-wht rob m-t-2 w-80">{roulette.imgMes}</p>					
				</div>

				<Content stats={props.stats} pop={props.pop} end={props.end} txt={props.txt}/>

			</section>

			<footer className="txt-wht m-t-2 p-20 txt-al-ce fade-b">
				<small className="rob">{roulette.foot}</small>
			</footer>

		</aside>
	)
}

/* contains the spinner and aside */
const Main = (props)=>{
	return(
		<main className="flx flx-jc-ce flx-ai-ce h-100 w-100">
			<Roulette stats={props.stats} pop={props.pop} end={props.end} end={props.end} txt={props.txt} upd={props.upd}/>
			<Aside stats={props.stats} pop={props.pop} end={props.end} txt={props.txt}/>
		</main>
	)
}

const MobMain =(props)=>{
	return(
		<main className="flx flx-col flx-jc-ce flx-ai-ce h-100 w-100 bg-blue mob-main">
			<Roulette stats={props.stats} pop={props.pop} end={props.end} txt={props.txt} txt={props.txt} upd={props.upd}/>
			<Content stats={props.stats} pop={props.pop} end={props.end} txt={props.txt}/>
		</main>
	)
}

export default Main;
export {Content,MobMain}
