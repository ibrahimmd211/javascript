import './App.css';
import Maincard from'./Maincard'


function App(){
    return(
        <div className='flex'>
            <Maincard 
            img='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Saliba_Profile_1100x693_1.jpg?auto=webp&itok=SIzhl5eb'
            name='Saliba'
            positoin='centre back'
            description='Promising young defender William spent the second half of last season back on loan in France, where he impressed for Nice, and is back in Ligue 1 this term, at Marseille.The imposing right-footed centre back made 20 league appearances for Nice, winning their Player of the Month award in January 2021.He started the last campaign as an unused sub for the Community Shield win over Liverpool, but had not made his Gunners debut by the time this season started.The France youth international has played all his football in his home country, having joined from Saint-Etienne in 2019.'
            />
            
            <Maincard 
            img='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Saka_Profile_1100x693_0.jpg?auto=webp&itok=bLhiPbi_'
            name='Saka'
            positoin='right wing'
            description='Arsenals Player of the Season for 2020/21, Bukayo continued to make great strides forward last term, confirming his status as one of the hottest young prospects in European football.'
            
            />
            <Maincard 
            img='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Xhaka_Profile_1100x693_0.jpg?auto=webp&itok=4nEaxh1G'
            name='Xhaka'
            positoin='Midfield'
            description='Combative midfielder Granit remains a cornerstone of the Arsenal midfield after another productive season in 2020/21 during which he featured 45 times. The Switzerland international began his career at Basel, where he won two league titles and the Swiss Cup before joining Borussia Monchengladbach and making 140 appearances across four years for the Bundesliga side.'
           
            
            />

            <Maincard
            img='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Jesus_Profile_1100x693_0.jpg?auto=webp&itok=bchfVnky'
            name='Jesus' 
            positoin='Striker'
            description='A dynamic forward with a wealth of Premier League experience, Gabriel joined in the summer to reunite with Mikel Arteta, who had coached him at previous club Manchester City.'
            />

        </div>
    )
}