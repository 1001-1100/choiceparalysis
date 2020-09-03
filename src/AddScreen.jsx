import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

class AddScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: this.props.cards,
            choiceValue: '',
        };
    }

    addChoice = (e) => {
        if(this.state.choiceValue.trim() !== ''){
            const cards = this.state.cards
            const card = {
                key: this.state.choiceValue,
                title: this.state.choiceValue,
                chosen: true,
            }
            cards.push(card)
            this.setState({cards})
        }
    }

    changeChoice = (e) => {
        this.setState({choiceValue: e.target.value})
    }

    makeChoice = (e) => {
        console.log(this.state.cards)
    }

    removeChoice = (i) => {
        const cards = this.state.cards;
        cards.splice(i, 1);
        const chooseCards = [];
        var count = 0;
        cards.map(card => {
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
            <Box my={2}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <center>
                    Add your choices!
                    </center>
                </Typography>
                <TextField onChange={this.changeChoice} value={this.choiceValue} id="outlined-basic" label="Choice" variant="outlined"/>
                <Box my={3}>
                    <Button onClick={this.addChoice} variant="contained" color="primary">
                        Add Choice
                    </Button>
                    {/* <Button onClick={this.makeChoice} variant="contained" color="primary">
                    Make Choice 
                    </Button> */}
                    <Link to='/choose'>
                        <Button variant='contained' color='primary'>
                            Make a Decision 
                        </Button>
                    </Link>
                    <Link to='/random'>
                        <Button variant='contained' color='primary'>
                            Make a random choice
                        </Button>
                    </Link>
                </Box>
                {this.state.cards.map((card, index) => ( 
                    <SimpleCard key={card.key} title={card.title} index={index} removeChoice={this.removeChoice}/>
                ))}
                <Fact fact={this.props.fact} />
            </Box>
            </Container>
         );
    }
}

export default AddScreen;