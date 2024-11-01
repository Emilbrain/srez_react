import Carousel from 'react-bootstrap/Carousel';

export function Slider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/get-altay/1594075/2a0000016f36bba08f0b6637cc25a7f27477/XXL_height"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>ОБОИИИИИИ</h5>
                    <p>МНОГО и ДОРОГО</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/get-altay/2960979/2a00000173a97ecee15eada2e504dcbc6269/XXL_height"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>ОБОИИИИИИ</h5>
                    <p>МНОГО и ДОРОГО</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://remontvspb.ru/wp-content/uploads/2022/06/oboikin-003.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>ОБОИИИИИИ</h5>
                    <p>МНОГО и ДОРОГО</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
