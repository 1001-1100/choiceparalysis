import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fact from './Fact';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Autocomplete from '@material-ui/lab/Autocomplete';

class AddScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: this.props.cards,
            choiceValue: '',
            choiceDescription: '',
            wheelDisabled: (this.props.cards.length < 2),
            decisionDisabled: (this.props.cards.length < 3),
        };
    }

    addChoice = () => {
        console.log(this.state.choiceValue)
        if(this.state.choiceValue.trim() !== ''){
            const cards = this.state.cards
            const card = {
                key: this.state.choiceValue + this.state.description,
                title: this.state.choiceValue,
                description: this.state.choiceDescription,
                chosen: true,
            }
            cards.push(card)
            this.setState({cards})
            localStorage.setItem('cards',JSON.stringify(cards))
        this.setState({choiceValue: ''})
        this.setState({choiceDescription: ''})
        this.setState({wheelDisabled:this.state.cards.length < 2})
        this.setState({decisionDisabled:this.state.cards.length < 3})
        }
    }

    changeChoice = (e, value) => {
        this.setState({choiceValue: value})
    }

    changeKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.addChoice()
        }
    }

    changeChoiceDesc = (e) => {
        this.setState({choiceDescription: e.target.value})
    }

    removeChoice = (i) => {
        const cards = this.state.cards;
        cards.splice(i, 1);
        this.setState({cards})
        localStorage.setItem('cards',JSON.stringify(cards))
        this.setState({wheelDisabled:this.state.cards.length < 2})
        this.setState({decisionDisabled:this.state.cards.length < 3})
    }

    render() { 
        return ( 
            <Container maxWidth="md">
            <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        <center>
                        Add your choices!
                        </center>
                    </Typography>
                <Box my={4}>
                    <Container maxWidth="sm">
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                            <Autocomplete
                                onKeyPress={this.changeKeyPress}
                                onInputChange={this.changeChoice}
                                freeSolo
                                options={[].map((option) => option.title)}
                                inputValue={this.state.choiceValue}
                                renderInput={(params) => (
                                <TextField {...params} label="Choice" margin="normal" variant="outlined" />
                                )}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <Autocomplete
                                onKeyPress={this.changeKeyPress}
                                onInputChange={this.changeChoiceDesc}
                                freeSolo
                                options={[].map((option) => option.title)}
                                inputValue={this.state.choiceDescription}
                                renderInput={(params) => (
                                <TextField {...params} label="Choice Description" margin="normal" variant="outlined" />
                                )}
                            />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box my={1}>
                    <Container maxWidth="sm">
                        <center>
                            <Button onClick={this.addChoice} variant="contained" color="primary">
                                Add Choice
                            </Button>
                        </center>
                    </Container>
                </Box>
                <Box my={4}>
                    <Container maxWidth="sm">
                        <center>

                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Link style={{color:'#d3d3d3'}} to={this.state.decisionDisabled ? '#': '/choose'}>
                                <Button disabled={this.state.decisionDisabled} variant='contained' color='primary'>
                                        Make a Decision 
                                </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link style={{color:'#d3d3d3'}} to={this.state.wheelDisabled ? '#': '/wheel'}>
                                <Button disabled={this.state.wheelDisabled} variant='contained' color='primary'>
                                    Spin the wheel!
                                </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link style={{color:'#d3d3d3'}} to={this.state.wheelDisabled ? '#': '/snap'}>
                                <Button disabled={this.state.wheelDisabled} variant='contained' color='primary'>
                                    Thanos snap!
                                </Button>
                                </Link>
                            </Grid>
                        </Grid>

                        </center>
                    </Container>
                </Box>
                <Grid container spacing={2}>
                {this.state.cards.map((card, index) => ( 
                    <Grid item xs={6}>
                        <SimpleCard key={card.key} title={card.title} description={card.description} index={index} removeChoice={this.removeChoice}/>
                    </Grid>
                ))}
                </Grid>
                <center>
                    <Fact fact={this.props.fact} />
                </center>
            </Box>
            </Container>
         );
    }
}

export default AddScreen;