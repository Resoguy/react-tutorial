import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';


class Counter extends React.Component {
    state = {
        count: 0
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    reset = () => {
        this.setState({count: 0});
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const {count} = this.state;

        return (
            <Card>
                <h1>{count}</h1>
                <div>
                    <Button
                        onClickHandler={this.decrement}>
                        Decrement -
                    </Button>

                    <Button
                        onClickHandler={this.reset}
                        variant="secondary">
                        Reset
                    </Button>

                    <Button
                        onClickHandler={this.increment}>
                        Increment +
                    </Button>
                </div>
            </Card>
        )
    }
}

export default Counter;