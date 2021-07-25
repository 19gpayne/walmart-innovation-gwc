import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    border: 1px solid #041e42;
    font-size: 40px;
    font-family: Roboto Condensed;
    text-align: right;
    color: black;
    display: block;
    margin-left: 500px;
    box-shadow: inset 5px 5px 7px rgba(0, 0, 0, .2);
    position: absolute;
    right: 50px;
    top: 50%;
    bottom: 40px;
    border-radius: 4px;
    background-color: white;
    width: 60%;
    @media screen and (max-width: 1024px) {
        position: relative;
        top: revert;
        bottom: revert;
        display: block;
        margin: 0;
        right: revert;
        width: 99%;
        padding: 0;
    }
`;

const Padding = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    text-align: center;
`;

const Font = styled.div`
    font-size: 20px;
    padding: 20px;
    @media screen and (max-width: 800px) {
        font-size: 15px;
    }
`;

const Flex = styled.div`
    flex-direction: column;
`;

const Icon = styled.div`
    padding: 40px;
`;

class NavigationBox extends React.Component {
    state={page: 1};

    componentDidMount() {
        
    }

    render() {
        return (
            <Box>
                {this.state.page === 1 &&
                    <>
                        <Padding> 
                            <Flex>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' width='50%' alt='Walmart'/>
                                <br />
                                Welcome to your new shopping list
                                <br />
                                <Font>
                                    Designed to work in tandem with the Walcart, this shopping
                                    list focuses on making shopping quick and easy.
                                    With a tap, the list can go from your phone to cart's screen and the shopper
                                    can add items to the navigation.
                                </Font>
                            </Flex>
                            <Icon><DoubleRightOutlined onClick={() => {return this.setState({'page': 2})}}/></Icon>
                        </Padding>
                    </>
                }
                {this.state.page === 2 &&
                    <Padding>
                        <Icon><DoubleLeftOutlined onClick={() => {return this.setState({'page': 1})}}/></Icon>
                        <Flex>
                            <img src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627230687/Screen_Shot_2021-07-25_at_12.31.14_PM_pvpd4t.png' width='70%' alt='Aisle K9 (1)'/>
                            <br />
                            <br />
                            Readable and organized
                            <br />
                            <Font>
                                Aisle headers are now bright and bold to help you easily locate items.
                                Spend more time doing what you love, not finding out where
                                the grape jelly is. 
                            </Font>
                        </Flex>
                        <Icon><DoubleRightOutlined onClick={() => {return this.setState({'page': 3})}}/></Icon>
                    </Padding>
                }
                {this.state.page === 3 &&
                    <Padding>
                        <Icon><DoubleLeftOutlined onClick={() => {return this.setState({'page': 2})}}/></Icon>
                        <Flex>
                            <img src='https://res.cloudinary.com/dou0q4ekk/image/upload/v1627230768/Screen_Shot_2021-07-24_at_6.49.11_PM_i6qalg.png' width='20%' alt='Location'/>
                            <br />
                            Navigate with ease
                            <br />
                            <Font>
                                By clicking this icon, add items to the cart's navigation. The cart will guide the shopper to
                                the item in order of aisles. Browse mode will go to every aisle.
                            </Font>
                        </Flex>
                        <Icon><DoubleRightOutlined onClick={() => {}} style={{visibility: 'hidden'}}/></Icon>
                    </Padding>
                }
            </Box>
        )
    }
};

export default NavigationBox;
