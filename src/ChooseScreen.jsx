import React, {Component} from 'react';
import ChooseCard from './ChooseCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import {IntegerSequence} from './RandomNumberGenerator';

class ChooseScreen extends Component {

    constructor(props){
        super(props);
        const chooseCards = [];
        const cards = [...this.props.cards];

        const sample = IntegerSequence(3, cards.length);
        sample.forEach(n => {
            chooseCards.push(cards[n]);
        })

        this.state = {
            cards,
            chooseCards,
        };
    }

    removeChoice = (i) => {
        const cards = this.state.cards;
        cards.splice(i, 1);
        const chooseCards = [];
        var count = 0;
        cards.forEach(card => {
            if(count < 3){
                chooseCards.push(card);
                count += 1;
            }
        })
        this.setState({cards,chooseCards})
    }

    render() { 
        return ( 
            <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    {this.state.chooseCards.length > 1 ? 'Pick a choice to remove.' : 'You have chosen!'}
                    </center>
                </Typography>
                {this.state.chooseCards.map((card, index) => ( 
                    <Box my={2}>
                        <ChooseCard key={card.key} title={card.title} description={card.description} index={index} removeChoice={this.removeChoice}/>
                    </Box>
                ))}
                <Fact fact={this.props.fact}/>
            </Box>
            </Container>
         );
    }
}

export default ChooseScreen;