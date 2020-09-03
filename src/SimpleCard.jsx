import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class SimpleCard extends Component {

    render() { 
        
        return ( 
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary">
                        {this.props.category}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button onClick={() => this.props.removeChoice(this.props.index)} size="small">Delete</Button>
                </CardActions>
            </Card>
         );
    }
}

export default SimpleCard;