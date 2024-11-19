import { useEffect, useState } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import { CartItemWrapper, FormWrapper, GlobalStyles, ProductListWrapper, SummaryWrapper } from "./style";
import axios from "axios";
import { fetchProvinces } from "../../services/AddressService";


const CartPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "iPhone 16 Pro 1TB",
            image: "https://via.placeholder.com/80",
            price: 43990000,
            quantity: 1,
        },
        {
            id: 2,
            name: "MacBook Pro M2",
            image: "https://via.placeholder.com/80",
            price: 49990000,
            quantity: 2,
        },
    ]);
    const [locationprovince, setlocationprovince] = useState(0);
    const [provinces, setProvinces] = useState({ data: [] });
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");
    const [data, setData] = useState({})
    const [indexLocation, setIndexLocation] = useState(0);
    // useEffect(() => {
    //     axios.get("https://api.example.com/vietnam/provinces").then((response) => {
    //         setData(response.data);
    //     });
    // }, []);
    const districts = selectedProvince
        ? data.find((item) => item.name === selectedProvince)?.districts || []
        : [];

    // Lấy danh sách phường/xã dựa trên quận/huyện
    const wards = selectedDistrict
        ? districts.find((item) => item.name === selectedDistrict)?.wards || []
        : [];

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
        setSelectedDistrict(""); // Reset quận/huyện
        setSelectedWard(""); // Reset phường/xã
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        setSelectedWard(""); // Reset phường/xã
    };

    const handleWardChange = (e) => {
        setSelectedWard(e.target.value);
    };

    // const filteredData = provinces.data.filter((province, index) => index === indexLocation);
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
                setProvinces(response.data);
            } catch (error) {
                console.error("Error fetching provinces:", error.message);
            }
        };

        fetchProvinces();
    }, []);
    console.log("data", provinces.data)


    useEffect(() => {
        console.log("index", indexLocation)
    });


    const totalPrice = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
    const [gender, setGender] = useState("Anh"); // State để lưu giá trị đã chọn

    const handleGenderChange = (e) => {
        setGender(e.target.value); // Cập nhật state khi chọn radio
    };
    const handleChangeQuantityIncrease = (quantity) => {

        quantity = quantity + 1;
        console.log(quantity)



    }
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value; // Lấy giá trị đã chọn
        // const index = e.target.selectedIndex; // Lấy index đã chọn
        // setIndexLocation(e.target.index)
        setIndexLocation(e.target.selectedIndex)
        // se


        // console.log(e.target.selectedIndex)

    };
    const handleChangeQuantityDecrease = (quantity) => {

        quantity = quantity - 1;
        console.log(quantity)
    }
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <GlobalStyles />
            <ProductListWrapper>
                {products.map((product) => (
                    <CartItemWrapper>
                        <img src={product.image} alt={product.name} />
                        <div className="info">
                            <h4>{product.name}</h4>
                            <p>{product.price.toLocaleString()}₫</p>
                        </div>
                        <div className="actions">
                            <button onClick={() => handleChangeQuantityDecrease(product.quantity)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => handleChangeQuantityIncrease(product.quantity)}>+</button>
                        </div>
                    </CartItemWrapper>
                ))}
                <div className="total" style={{ display: 'flex', marginLeft: '570px', marginTop: '10px' }}>
                    <h4>Tổng tiền:   </h4>
                    <span style={{ marginLeft: "10px" }}> {totalPrice.toLocaleString()}₫</span>
                </div>
            </ProductListWrapper>
            <SummaryWrapper>

                <FormWrapper>
                    <h3>Thông tin khách hàng</h3>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender" // Name giống nhau để chỉ chọn 1 trong 2
                                value="Anh"
                                checked={gender === "Anh"}
                                onChange={handleGenderChange}
                            />
                            Anh
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender" // Name giống nhau để chỉ chọn 1 trong 2
                                value="Chị"
                                checked={gender === "Chị"}
                                onChange={handleGenderChange}
                            />
                            Chị
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Họ và Tên</label>
                        <input type="text" placeholder="Nhập họ và tên" />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại" />
                    </div>
                    <h3>Chọn hình thức nhận hàng</h3>
                    <label >
                        <input type="radio" name="delivery" checked="true" value="delivery" style={{ marginBottom: '10px' }} /> Giao tận nơi
                    </label>


                    <div className="form-group">
                        <select onChange={handleSelectChange}>
                            {provinces.data.map((province, index) => (
                                <option key={index} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                            {/* <option>Chọn Quận/Huyện</option> */}

                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Số nhà, tên đường" />
                    </div>

                </FormWrapper>
                <div className="total" style={{ display: 'flex', marginLeft: '570px', marginTop: '20px' }}>
                    <h4>Tổng tiền: </h4>
                    <span style={{ marginBottom: '7px', color: "#FF0000" }}> {totalPrice.toLocaleString()}₫</span>
                </div>

                <button>Đặt hàng</button>
            </SummaryWrapper>


            <FooterComponent />
        </div>
    )
}
export default CartPage