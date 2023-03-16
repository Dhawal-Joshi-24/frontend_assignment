import React, { useState } from 'react';
import InvestmentInformation from './InvestmentInformation'
import News from './News'
import VPlayer from './VPlayer'

let articles = [{ "source": { "id": "the-washington-times", "name": "The Washington Times" }, "author": "The Washington Times https://www.washingtontimes.com", "title": "Special Section: ESG Investments: Prudent or Perilously Political?", "description": "Free-market solutions to ‘woke’ investment onslaught.", "url": "https://www.washingtontimes.com/specials/esg-investments/?utm_source=twt_banner", "urlToImage": "https://media.washtimes.com/media/specials/thumbnails/ESGwokeInvestThumbnail.jpg", "publishedAt": "2023-03-13T16:07:24.8096058Z", "content": "Recent Stories\r\nThe following are excerpts from a speech by Gov. DeSantis in Naples, Florida, on February 13, 2023.\r\n Shares \r\nMany of America's most powerful companies have combined to pursue a dang… [+2207 chars]" }, { "source": { "id": "handelsblatt", "name": "Handelsblatt" }, "author": "Felix Stippler", "title": "ETF: Das sagen Experten zu den liebsten Indexfonds der Deutschen", "description": "Eine neue Auswertung zeigt, dass die Deutschen ihre Investments gerne streuen und dass sie bisweilen auch zum Zocken neigen. Was Anleger daraus lernen können.", "url": "https://www.handelsblatt.com/finanzen/anlagestrategie/fonds-etf/etf-das-sagen-experten-zu-den-liebsten-indexfonds-der-deutschen/29004832.html", "urlToImage": "https://www.handelsblatt.com/images/lieblings-etfs-der-deutschen/29005748/2-format2003.jpg", "publishedAt": "2023-03-13T15:51:57+00:00", "content": "Lieblings-ETFs der DeutschenDie deutschen Privatanleger investieren ihr Geld am liebsten in internationale Indexfonds.\r\n(Foto: dpa)\r\nFrankfurt Deutsche Privatanleger schwören besonders auf ein Produk… [+1281 chars]" }, { "source": { "id": "financial-post", "name": "Financial Post" }, "author": "Financial Post", "title": "Financial Post", "description": "Read expert analysis, Investment Equipment, Stock Screeners, and Monetary Strategy Information on investing in Canada. Get best investment advice from experts.", "url": "http://business.financialpost.com/category/investing/", "urlToImage": "https://dcs-static.gprod.postmedia.digital/13.0.2/websites/images/fp/ogimage-fp.png", "publishedAt": "2023-03-10T19:22:32.2122783Z", "content": null }]

const videos = [
    {
        title: "How does the stock market work? - Oliver Elfenbaum",
        src: "https://www.youtube.com/watch?v=p7HKvqRI_Bo"
    },
    {
        title: "Why did Silicon Valley Bank fail? The story behind the largest financial crisis in US after 2008",
        src: "https://www.youtube.com/watch?v=w7QF8By3ftY"
    },
    {
        title: "Stock Markets Crash Today, Sensex Down 1,000 Points, What Should Be Your Strategy?",
        src: "https://www.youtube.com/watch?v=aLO5r1EnPUo"
    }
];



const Smedia = () => {

    const [investment, setInvestment] = useState('ABC');

    const handleInvestmentChange = (event) => {
        setInvestment(event.target.value);
    };

    const investments = {
        ABC: {name:"ABC",
          amountInvested: 5000,
          currentValue: 7000,
          projectedReturns: 9000,
        },
        DEF: {name:"DEF",
          amountInvested: 5000,
          currentValue: 3000,
          projectedReturns: 9000,
        },
        GHI: {name:"GHI",
          amountInvested: 5000,
          currentValue: 7000,
          projectedReturns: 19000,
        },
      };
    return (
        <div  style={{ backgroundColor:"#ECF2FF"}}>
            <h1 >Social Media</h1>
            <hr/>
                <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Investment Information Summary</h3>
                <div className="dropdown my-3" style={{ backgroundColor:"#BCCEF8"}}>
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Companies Invested 
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={handleInvestmentChange}
                                value="ABC"
                            >
                                ABC
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={handleInvestmentChange}
                                value="DEF"
                            >
                                DEF
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={handleInvestmentChange}
                                value="GHI"
                            >
                                GHI
                            </button>
                        </li>
                    </ul>
                    <h4 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Investment Information on {investments[investment].name} </h4>
                    <InvestmentInformation {...investments[investment]} />
                </div>
            
            <div className="container my-5">
                <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>News Panel</h3>
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" style={{ backgroundColor:"#BCCEF8"}}key={element.url}>
                            <News title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
            <div className="container my-3">
                <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Video Panel</h3>
                <div className="row">
                    {videos.map((element) => {
                        return <div className="col-md-4" style={{ backgroundColor:"#BCCEF8"}}key={element.src}>
                            <VPlayer src={element.src} title={element.title ? element.title : ""} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Smedia
