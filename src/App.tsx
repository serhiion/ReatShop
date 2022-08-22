import {Product} from "./containers/Product"
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {Error} from "./components/Error";


function App() {
    const {loading, products, error} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader></Loader>}
            {error && <Error error={error}></Error>}
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    );
}

export default App;
