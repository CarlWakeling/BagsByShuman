class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
        console.log(data);
    }
    render() {
        return (
            <div class="container">
                <div className="header">
                    <div className="top-bar"></div>
                    <div className="main">
                        <div className="buttons buttons-left">
                            <a href="#" target="_blank"><i className="fa fa-map-marker"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-search"></i></a>
                        </div>
                        <div className="text">BAGS BY SHUMAN</div>
                        <div className="buttons buttons-right">
                            <a href="#" target="_blank"><i className="fa fa-user"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-heart"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-shopping-basket"></i></a>
                        </div>
                    </div>
                </div>
                <div className="header-placeholder"></div>
                <div className="body">
                    <Carousel id="divMainCarousel" images={this.state.data.images} />
                    <TileList tiles={this.state.data.tiles} />
                    <div className="clear"></div>
                </div>
                <div className="footer-placeholder"></div>
                <div className="footer">
                    <span>FREE SHIPPING ANYWHERE IN NEW ZEALAND</span>
                </div>
            </div>
        );
    }
}
class TileList extends React.Component {
    render() {
        const tileNodes = this.props.tiles.map(tile => (
            <Tile image={tile.image} text={tile.text} />
        ));
        return (
            <div className="tile-list">{tileNodes}</div>
        );
    }
}
class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <div className="tile-image centre-image">
                    <img src={this.props.image} />
                </div>
                <div>{this.props.text}</div>
            </div>
        );
    }
}
//class CarouselImage extends React.Component {
//    render() {
//        return (
            
//        );
//    }
//}
class Carousel extends React.Component {
    render() {
        const indicators = this.props.images.map((image, index) => {
            if (index == 0) {
                return <li data-target={'#' + this.props.id} data-slide-to={index} className="active"></li>
            } else {
                return <li data-target={'#' + this.props.id} data-slide-to={index}></li>
            }
        });
        const inners = this.props.images.map((image, index) => {
            if (index == 0) {
                return <div className="item active">
                    <div className="centre-image">
                        <img src={image} />
                    </div>
                </div>
            } else {
                return <div className="item">
                    <div className="centre-image">
                        <img src={image} />
                    </div>
                </div>
            }
        });
        return (
            <div id={this.props.id} className="main-image carousel slide" data-ride="carousel" data-interval="6000">
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {inners}
                </div>
            </div>
        );
    }
}
const data = {
    tiles: [
        { id: 1, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag' },
        { id: 2, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 2' },
        { id: 3, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 3' },
        { id: 4, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 4' },
        { id: 5, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 5' },
        { id: 6, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 6' },
        { id: 7, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 7' },
        { id: 8, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 8' },
        { id: 9, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 9' },
        { id: 10, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 10' },
        { id: 11, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 11' },
        { id: 12, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 12' },
        { id: 13, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 13' },
        { id: 14, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 14' },
        { id: 15, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 15' },
        { id: 16, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 16' },
        { id: 17, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 17' },
        { id: 18, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 18' },
        { id: 19, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 19' },
        { id: 20, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 20' },
        { id: 21, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 21' },
        { id: 22, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 22' },
        { id: 23, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 23' },
        { id: 24, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 24' },
        { id: 25, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 25' },
        { id: 26, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 26' },
        { id: 27, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 27' },
        { id: 28, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 28' },
        { id: 29, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 29' },
        { id: 30, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 30' },
        { id: 31, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 31' },
        { id: 32, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 32' },
        { id: 33, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 33' },
        { id: 34, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 34' },
        { id: 35, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 35' },
        { id: 36, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 36' },
        { id: 37, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 37' },
        { id: 38, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 38' },
        { id: 39, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 39' },
        { id: 40, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 40' }
    ],
    images: [
        'https://tse4.mm.bing.net/th?id=OIP.-Yf8oST4BhaHePH3HU6cSwHaHo&pid=Api',
        'http://www.chicvegan.com/wp-content/uploads/2013/10/the-underground-chic-3-bags.jpg',
        'http://www.spottedfashion.com/wp-content/uploads/2013/07/Givenchy-Pearl-Grey-with-Metal-Hardware-Antigona-Medium-Bag.jpg',
        'https://ninapolli.files.wordpress.com/2011/06/chocolate-bag.jpg'
    ]
}