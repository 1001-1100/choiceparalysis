import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import ReactTurnTable from './ReactTurnTable';
import './css/ReactTurnTable.css';

class RandomScreen extends Component {

    constructor(props){
        super(props);
        const choices = [];
        const cards = [...this.props.cards];
        cards.forEach(card => {
            choices.push(card.title);
        })
        this.state = {
            cards,
            choices,
        };
    }

    render() { 
        const prizes = this.state.choices
        const colorChoices = []
        colorChoices.push(['#009392','#39b185','#9ccb86','#e9e29c','#eeb479','#e88471','#cf597e'])
        colorChoices.push(['#008080','#70a494','#b4c8a8','#f6edbd','#edbb8a','#de8a5a','#ca562c'])
        colorChoices.push(['#3d5941','#778868','#b5b991','#f6edbd','#edbb8a','#de8a5a','#ca562c'])
        colorChoices.push(['#798234','#a3ad62','#d0d3a2','#fdfbe4','#f0c6c3','#df91a3','#d46780'])
        colorChoices.push(['#A16928','#bd925a','#d6bd8d','#edeac2','#b5c8b8','#79a7ac','#2887a1'])
        colorChoices.push(['#009B9E','#42B7B9','#A7D3D4','#F1F1F1','#E4C1D9','#D691C1','#C75DAB'])
        colorChoices.push(['#009392','#72aaa1','#b1c7b3','#f1eac8','#e5b9ad','#d98994','#d0587e'])

        const colors = colorChoices[Math.floor((Math.random() * colorChoices.length))]
        const options = {
            prizes,
            colors,
            width: 500,
            height: 500,
            primaryColor: "#83AF9B",
            secondaryColor: "#C8C8A9",
            fontStyle:{
                color:"#808080",
                size:"14px",
                fontVertical:true,
                fontWeight:"bold",
                fontFamily:"Microsoft YaHei"
            },
            speed : 1000,
            duration:5000,
            clickText:"Spin",
            onStart(){
              //If you want before the rotate do some...
              console.log('start...');
              //If you want stop rotate you can return false
              return true
            },
            onComplete(prize){
              console.log('choice:',prize)
            }
        }
        return ( 
            <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    Spin the wheel! 
                    </center>
                </Typography>
                <ReactTurnTable {...options}/>
                <Fact fact={this.props.fact}/>
            </Box>
            </Container>
         );
    }
}

export default RandomScreen;