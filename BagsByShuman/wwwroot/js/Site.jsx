class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: data };
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
                    <TileList data={this.state.data} />
                </div>
                <div className="footer">
                    <span>FREE SHIPPING ANYWHERE IN NEW ZEALAND</span>
                </div>
            </div>
        );
    }
}
class TileList extends React.Component {
    render() {
        const tileNodes = this.props.data.map(tile => (
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
const data = [
    { id: 1, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag' },
    { id: 2, image: 'https://novapress.blob.core.windows.net/media/NovaPressLogo_FINAL.png', text: 'Nova Bag 2' }
]