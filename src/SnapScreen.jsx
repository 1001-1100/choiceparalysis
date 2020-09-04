import React, {Component} from 'react';
import ChooseCard from './ChooseCard';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import {Integer} from './RandomNumberGenerator';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class SnapScreen extends Component {

    constructor(props){
        super(props);
        const cards = [...this.props.cards];

        this.state = {
            cards,
            img:'snapRest.png'
        };
    }

    removeChoice = (i) => {
        const cards = this.state.cards;
        cards.splice(i, 1);
        this.setState({cards})
    }

    snap = () => {
        this.setState({img:'snapped.gif'})
        const cards = this.state.cards
        const length = cards.length
        for(var i = 0; i < Math.floor(length/2); i++){
            this.removeChoice(Integer(0,cards.length))
        }
    }

    render() { 
        return ( 
            <Container maxWidth="sm">
            <Box my={4}>
                <Box my={4}>
                    <center>
                        <Button onClick={this.snap}>

                        <img alt='Snap!' src={this.state.img}
                        onMouseEnter={() => this.setState({img:'snapReady.png'})}
                        onMouseLeave={() => this.setState({img:'snapRest.png'})}>
                        </img>
                        </Button>
                    </center>
                </Box>
                <Box my={4}>
                <Typography color='textSecondary'>
                    <center>
                        "Perfectly balanced, as all things should be"
                    </center>
                </Typography>
                </Box>
                <Grid container spacing={2}>
                {this.state.cards.map((card, index) => ( 
                    <Grid item xs={6}>
                        <ChooseCard key={card.key} title={card.title} description={card.description} index={index} removeChoice={this.removeChoice}/>
                    </Grid>
                ))}
                </Grid>

                <center>
                    <Fact fact={this.props.fact}/>
                </center>
            </Box>

            </Container>
         );
    }
}

export default SnapScreen;