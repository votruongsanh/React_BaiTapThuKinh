import React, { Component } from 'react'
import './Style.css'
export default class BaiTapThuKinh extends Component {
    // state = {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    // }
    state = {
        prodductDetail: {
            id: 1,
            price: 30,
            name: 'GUCCI G8850U',
            url: './glassesImage/v1.png',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        },
    }
    renderGlass = () => {
        return this.arrProduct.map((glass, index) => {
            return (
                <button className='btn' key={index} onClick={
                    () => {
                        this.changeGlass(glass);
                        // console.log(index)
                    }
                }>
                    <img src={glass.url} className='img-fluid border h-50  w-100' />
                </button>
            );
        });

    }
    changeGlass = (sp) => {
        this.setState({
            prodductDetail: sp,
        })
    }

    render() {
        let { url, name, desc } = this.state.prodductDetail;
        return (
            <div>
                <h1 className='title-glass'>TRY GLASS APP ONLINE</h1>
                <div className='d-flex justify-content-center'>
                    <div className='container'>
                        <div className='row p-5'>
                            <div className='col-4 '>
                                <div className='img-Left'>
                                    <img src={url} />
                                    <div className='bg-title-glass'>
                                        <h3 className='text-title'>{name}</h3>
                                        <p className=''>{desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4'>

                            </div>
                            <div className='col-4'>
                                <img src='./glassesImage/model.jpg' className='img-fluid' />
                            </div>
                        </div>

                        <div className='d-flex  bg-light p-5'>

                            {this.renderGlass()}



                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
