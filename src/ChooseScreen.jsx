import React, {Component} from 'react';
import ChooseCard from './ChooseCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';

class ChooseScreen extends Component {

    constructor(props){
        super(props);
        var count = 0;
        const chooseCards = [];
        const cards = [...this.props.cards];
        cards.forEach(card => {
            if(count < 3){
                chooseCards.push(card);
                count += 1;
            }
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
                    Pick a choice to remove.
                    </center>
                </Typography>
                {this.state.chooseCards.map((card, index) => ( 
                    <ChooseCard key={card.key} title={card.title} description={card.description} index={index} removeChoice={this.removeChoice}/>
                ))}
                <Fact fact={this.props.fact}/>
            </Box>
            </Container>
         );
    }
}

export default ChooseScreen;