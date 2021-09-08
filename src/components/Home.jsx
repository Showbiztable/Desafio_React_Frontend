import './Home.css'
import React from 'react'

import healthSymbol from '../images/health_symbol.jpg'
import BotoesNavegacao from './Button'

const HomePage = (props) => {
    const usuarioLogado = () => {
        return (
            <div>
                <BotoesNavegacao />
                <div className='content'>
                    <h2 style={{marginTop: '0px'}}>Sobre a Vacinação</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Magna ac placerat vestibulum lectus mauris. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Bibendum neque egestas congue quisque egestas diam in. Amet consectetur adipiscing elit ut aliquam purus sit. Felis imperdiet proin fermentum leo vel orci porta. Porttitor lacus luctus accumsan tortor. Nibh sit amet commodo nulla. A diam sollicitudin tempor id eu nisl.</p>

                    <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nullam eget felis eget nunc. Egestas integer eget aliquet nibh praesent tristique magna. Sit amet consectetur adipiscing elit ut aliquam purus. Est ullamcorper eget nulla facilisi etiam dignissim. Volutpat sed cras ornare arcu. Augue interdum velit euismod in pellentesque massa placerat duis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Auctor augue mauris augue neque gravida in fermentum et. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Quis risus sed vulputate odio. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Arcu ac tortor dignissim convallis aenean et. Ipsum consequat nisl vel pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Vitae et leo duis ut diam quam nulla porttitor massa. Eget duis at tellus at urna condimentum mattis pellentesque id. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</p>

                    <h2>Quem pode entrar na fila da vacinação ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Magna ac placerat vestibulum lectus mauris. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Bibendum neque egestas congue quisque egestas diam in. Amet consectetur adipiscing elit ut aliquam purus sit. Felis imperdiet proin fermentum leo vel orci porta. Porttitor lacus luctus accumsan tortor. Nibh sit amet commodo nulla. A diam sollicitudin tempor id eu nisl.</p>

                    <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nullam eget felis eget nunc. Egestas integer eget aliquet nibh praesent tristique magna. Sit amet consectetur adipiscing elit ut aliquam purus. Est ullamcorper eget nulla facilisi etiam dignissim. Volutpat sed cras ornare arcu. Augue interdum velit euismod in pellentesque massa placerat duis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Auctor augue mauris augue neque gravida in fermentum et. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Quis risus sed vulputate odio. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Arcu ac tortor dignissim convallis aenean et. Ipsum consequat nisl vel pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Vitae et leo duis ut diam quam nulla porttitor massa. Eget duis at tellus at urna condimentum mattis pellentesque id. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.</p>
                </div>
            </div>
        )
    }

    const usuarioDeslogado = () => {
        return (
            <div>
                <img src={healthSymbol} alt="símbolo da saúde" className='image' />
            </div>
        )
    }

    return (
        <div>
            {!!props.token ? usuarioLogado() : usuarioDeslogado()}
        </div>
    )
}

export default HomePage