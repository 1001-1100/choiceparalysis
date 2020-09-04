import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import ReactTurnTable from './ReactTurnTable';
import './css/ReactTurnTable.css';
import {Integer} from './RandomNumberGenerator';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import {Shuffle} from './RandomNumberGenerator';

class RandomScreen extends Component {

    constructor(props){
        super(props);
        const choices = [];
        const cards = [...this.props.cards];
        cards.forEach(card => {
            choices.push(card.title);
        })
        const colorChoices = []
        colorChoices.push(['#009392','#39b185','#9ccb86','#e9e29c','#eeb479','#e88471','#cf597e'])
        colorChoices.push(['#008080','#70a494','#b4c8a8','#f6edbd','#edbb8a','#de8a5a','#ca562c'])
        colorChoices.push(['#3d5941','#778868','#b5b991','#f6edbd','#edbb8a','#de8a5a','#ca562c'])
        colorChoices.push(['#798234','#a3ad62','#d0d3a2','#fdfbe4','#f0c6c3','#df91a3','#d46780'])
        colorChoices.push(['#A16928','#bd925a','#d6bd8d','#edeac2','#b5c8b8','#79a7ac','#2887a1'])
        colorChoices.push(['#009B9E','#42B7B9','#A7D3D4','#F1F1F1','#E4C1D9','#D691C1','#C75DAB'])
        colorChoices.push(['#009392','#72aaa1','#b1c7b3','#f1eac8','#e5b9ad','#d98994','#d0587e'])

        const colors = colorChoices[Math.floor((Math.random() * colorChoices.length))]

        this.state = {
            cards,
            colors,
            choices: Shuffle(choices),
            speed: Integer(750,1500),
            duration: Integer(3000,6000),
            choice: '',
        };
    }

    durationChange = (event, value) => {
        this.setState({duration: value})

    }

    speedChange = (event, value) => {
        this.setState({speed: value})
    }

    valueText = (value) => {
        return `${value}`;
    }

    onComplete = (prize) => {
        this.setState({choice: prize})

    }

    onSpin = (prize) => {
        this.setState({choice: prize})
    }

    render() { 
        const prizes = this.state.choices
        const colors = this.state.colors

        const options = {
            prizes,
            colors,
            width: 500,
            height: 500,
            primaryColor: "#83AF9B",
            secondaryColor: "#C8C8A9",
            fontStyle:{
                color:"#FFF",
                size:"18px",
                fontVertical:true,
                fontWeight:"bold",
                fontFamily:"Microsoft YaHei"
            },
            speed : this.state.speed,
            duration: this.state.duration,
            clickText:"Spin",
            onStart(){
              return true
            },
        }
        return ( 
            <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    Spin the wheel! 
                    </center>
                </Typography>
                <center>
                <ReactTurnTable {...options} onComplete={this.onComplete} onSpin={this.onSpin}/>
                </center>
                <Box my={2}>
                <Typography variant="h5" component="h1" gutterBottom>
                    <center>
                    <TextField
                        id="outlined-read-only-input"
                        label=""
                        value={this.state.choice}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    </center>
                </Typography>
                </Box>
                <Typography variant="h6" component="h1" gutterBottom>
                    <center>
                        Speed
                    </center>
                </Typography>
                <Slider
                    defaultValue={this.state.speed}
                    getAriaValueText={this.valueText}
                    onChange={this.speedChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={100}
                    max={1500}
                />
                <Typography variant="h6" component="h1" gutterBottom>
                    <center>
                        Duration
                    </center>
                </Typography>
                <Slider
                    defaultValue={this.state.duration}
                    getAriaValueText={this.valueText}
                    onChange={this.durationChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={1000}
                    max={6000}
                />
                <center>
                    <Fact fact={this.props.fact}/>
                </center>
            </Box>
            </Container>
         );
    }
}

export default RandomScreen;