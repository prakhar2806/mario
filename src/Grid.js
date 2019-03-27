import React, { Component } from 'react';
import './Grid.css';

class Square extends Component {

    render() {

        return (
            <img src="https://www.publicdomainpictures.net/pictures/30000/nahled/plain-white-background.jpg" id={this.props.value} className="square" alt="mario" />
        )
    }
}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1
        }

        this.leftArrowClicked = this.leftArrowClicked.bind(this);
        this.rightArrowClicked = this.rightArrowClicked.bind(this);
        this.upArrowClicked = this.upArrowClicked.bind(this);
        this.downArrowClicked = this.downArrowClicked.bind(this);
        this.moveMario = this.moveMario.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.cookiesEaten = this.cookiesEaten.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this._handleDocumentClick, false);
        document.addEventListener("keydown", this._handleKeyDown);

        let rows = this.props.row;
        let column = this.props.column;
        let totalBlocks = rows * column - 1;
        let rowIndex = rows;
        let MushroomIndex = [];

        for (let i = 0; i < rowIndex; i++) {
            //let val = Math.floor(Math.random() * Math.floor(10));
            let val = Math.floor(Math.random() * totalBlocks) + 2;
            let ispresent = false;
            MushroomIndex.forEach(ele => {
                if (ele === val) {
                    ispresent = true;
                    rowIndex++;
                }
            })
            if (!ispresent) {
                // console.log("val", val);
                MushroomIndex.push(val);
                document.getElementById(val).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifnttt2HHkRPDibiRQWT6W9YY7zWiYnYlK9f9TdbcJaDWcdn_"
            }
        }

        this.setState({ mushroomIndexes: MushroomIndex });
        document.getElementById("1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC6pSNjX1QHk6gW8UdArnBoYiCtdaiOSnI2biQ_an7CxzpzDI"
    }

    _handleKeyDown(event) {
        switch (event.keyCode) {
            case 37:
                this.leftArrowClicked();
                break;
            case 38:
                this.upArrowClicked()
                break;
            case 39: this.rightArrowClicked();
                break;
            case 40: this.downArrowClicked()
                break;
            default: break;
        }
    }

    leftArrowClicked() {
        let currentIndex = this.state.currentIndex;//1
        let leftBordervalues = [];//1,4,7
        let row = parseInt(this.props.row, 10);
        let col = parseInt(this.props.column, 10);
        for (let i = 0; i < row; i++) {
            let num = col * i + 1;
            leftBordervalues.push(num);
        }

        let marioAtBorder = false;
        leftBordervalues.forEach(ele => {
            if (ele === currentIndex) {
                marioAtBorder = true;
            }
        })

        if (marioAtBorder) {
            this.setState({ currentIndex: currentIndex + (col - 1) }); 
        } else {
            this.setState({ currentIndex: currentIndex - 1 });
        }

        this.moveMario(currentIndex);
    }

    rightArrowClicked() {
        let currentIndex = this.state.currentIndex;//1
        let rightBordervalues = [];//3,6,9
        let row = parseInt(this.props.row, 10);
        let col = parseInt(this.props.column, 10);
        for (let i = 1; i <= row; i++) {
            let num =  col* i;
            rightBordervalues.push(num);
        }

        let marioAtBorder = false;
        rightBordervalues.forEach(ele => {
            if (ele === currentIndex) {
                marioAtBorder = true;
            }
        })

        if (marioAtBorder) {
            this.setState({ currentIndex: currentIndex - (col - 1) }); 
        } else {
            this.setState({ currentIndex: currentIndex + 1 });
        }

        this.moveMario(currentIndex);
    }

    upArrowClicked() {
        let currentIndex = this.state.currentIndex;//1
        let upBordervalues = [];//1,2,3
        let row = parseInt(this.props.row, 10);
        let col = parseInt(this.props.column, 10);
        for (let i = 1; i <= col; i++) {
            let num = i;
            upBordervalues.push(num);
        }

        let marioAtBorder = false;
        upBordervalues.forEach(ele => {
            if (ele === currentIndex) {
                marioAtBorder = true;
            }
        })

        if (marioAtBorder) {
            this.setState({ currentIndex: currentIndex + col * (row - 1) }); 
        } else {
            this.setState({ currentIndex: currentIndex - col }); 
        }

        this.moveMario(currentIndex);
    }

    downArrowClicked() {
        let currentIndex = this.state.currentIndex;//1
        let downBordervalues = [];//7,8,9
        let row = parseInt(this.props.row, 10);
        let col = parseInt(this.props.column, 10);
        for (let i = 1; i <= col; i++) {  
            let num = col * (row - 1) + i;
            downBordervalues.push(num);
        }

        let marioAtBorder = false;
        downBordervalues.forEach(ele => {
            if (ele === currentIndex) {
                marioAtBorder = true;
            }
        })

        if (marioAtBorder) {
            this.setState({ currentIndex: currentIndex - col * (row - 1) }); 
        } else {
            this.setState({ currentIndex: currentIndex + col }); 
        }
        console.log("down", this.state.currentIndex);
        this.moveMario(currentIndex);
    }

    moveMario(currentIndex) {
        document.getElementById(this.state.currentIndex).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC6pSNjX1QHk6gW8UdArnBoYiCtdaiOSnI2biQ_an7CxzpzDI";
        document.getElementById(currentIndex).src = "https://www.publicdomainpictures.net/pictures/30000/nahled/plain-white-background.jpg";
        this.cookiesEaten();
    }

    cookiesEaten() {
        if (this.state.mushroomIndexes.length > 0) {
            this.state.mushroomIndexes.forEach((ele, index) => {
                if (ele === this.state.currentIndex) {
                    this.state.mushroomIndexes.splice(index, 1);
                }
                if (this.state.mushroomIndexes.length === 0) {
                    alert("Mario is FULL. No more mushrooms to eat !! ");
                }
            })
        }

        // console.log("this.state.mushroomIndexes", this.state.mushroomIndexes);
    }

    renderSquare(i) {
        return (
            <Square value={i} />
        );
    }

    createTable() {
        let rows = this.props.row;
        let column = this.props.column;
        let table = []
        let k = 1;
        // Outer loop to create parent
        for (let i = 0; i < rows; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 1; j <= column; j++) {
                k = column * i + j;
                children.push(<td key={k}>{this.renderSquare(k)}</td>)
            }
            //Create the parent and add the children
            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }

    render() {

        return (
            <table>
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        );
    }
}

export default Grid;
