import React, { useState } from 'react';
import "../styles/content.css"
import { FaStar } from "react-icons/fa";
const Content = ({userSelect , user1 , user2 , setUser1 , setUser2}) => {

    const [state , setState] = useState({doga : 0 , deniz  : 0 , parti : 0 , gezi : 0})



    
    const updateUserData = (key, e, setFunc) => {
        const userField = `${key}oy`;
    
        setFunc((alldata) => ({
            ...alldata,
            [userField]: e.target.value,
        }));
    
        const deger1 = (user1[userField] / 100) * 5;
        console.log(user1[userField])
        const sondeger1 = deger1.toFixed(1);
    
        const deger2 = (user2[userField] / 100) * 5;
        const sondeger2 = deger2.toFixed(1);
    
        const deger = parseInt(sondeger2) + parseInt(sondeger1);
    
        setState((data) => ({
            ...data,
            [key]: deger,
        }));
    };




    const toplamDoga = (e) => {
        updateUserData("doga", e, userSelect === "user1" ? setUser1 : setUser2);
    };

    const toplamGezi = (e) => {
        updateUserData("gezi", e, userSelect === "user1" ? setUser1 : setUser2);
    };

    const toplamParti = (e) => {
        updateUserData("parti", e, userSelect === "user1" ? setUser1 : setUser2);
    };

    const toplamDeniz = (e) => {
        updateUserData("deniz", e, userSelect === "user1" ? setUser1 : setUser2);
    };


   



    const changeReservation = (field, e) => {
        const newState = {
            [`${field}rezervasyon`]: e.target.value,
        };
    
        if (userSelect === "user1") {
            setUser1((s) => ({ ...s, ...newState }));
        } else if (userSelect === "user2") {
            setUser2((s) => ({ ...s, ...newState }));
        }
    };
    
    
    const changeDoga = (e) => {
        changeReservation("doga", e);
    };
    
    const changeDeniz = (e) => {
        changeReservation("deniz", e);
    };

    const changeParti = (e) => {
        changeReservation("parti", e);
    };
    const changeGezi = (e) => {
        changeReservation("gezi", e);
    };




    const isReservationDisabled = (field, e) => {
        return user1[`${field}rezervasyon`] === e || user2[`${field}rezervasyon`] === e;
    };
    
    
    const disableddoga = (e) => {
        return isReservationDisabled("doga", e);
    };
    
    const disableddeniz = (e) => {
        return isReservationDisabled("deniz", e);
    };

    const disabledparti = (e) => {
        return isReservationDisabled("parti", e);
    };

    const disabledgezi = (e) => {
        return isReservationDisabled("gezi", e);
    };

    return (
        <div className='parentDiv'>
            




            <div className='container'>
                <div className='topDiv'>
                    <div className='imgDiv'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LSXAfxTro8yln89jECqNGjv2oRXIOMh_Lg&usqp=CAU" alt="" />
                    </div>
                    <div className='toinformDiv'>
                        <h3>Doğa</h3>

                        <input onChange={toplamDoga} value={userSelect === "user1" ? user1.dogaoy : user2.dogaoy} type="range" name="range" id="" />
                        
                        <span>{state.doga}<FaStar style={{color : "yellow" , marginLeft : "4" , fontSize : "12"}}/><span style={{marginLeft : "19px"}}>{userSelect === "user1" ? user1.dogarezervasyon : user2.dogarezervasyon}</span></span>

                    </div>
                </div>
                <div className='bottomDiv'>
                    <div className='descriptionDiv'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam fuga totam ut facere, dicta deserunt temporibus tenetur illum, corrupti, doloribus voluptatem? Tempore, sunt. Repellendus unde voluptates repudiandae. Accusantium iure harum maxime doloribus tempore facere, soluta in reiciendis illum sapiente blanditiis, mollitia quaerat, saepe vero pariatur delectus. Natus vero suscipit sequi eligendi et animi eveniet? Laboriosam, cupiditate pariatur? Id saepe ad vitae veniam! Cumque, deleniti!
                    </div>
                    <div className='selectDiv'>
                        <select name="" id="" onChange={changeDoga} value={userSelect === "user1" ? user1.dogarezervasyon : user2.dogarezervasyon}>
                            <option value="pazar" disabled={disableddoga("pazar")}>pazar</option>
                            <option value="cuma" disabled={disableddoga("cuma")} >cuma</option>
                            <option value="salı" disabled={disableddoga("salı")}>salı</option>
                            <option value="parşembe" disabled={disableddoga("perşembe")}>perşembe</option>
                        </select>
                    </div>
                </div>
            </div>





            <div className='container'>
                <div className='topDiv'>
                    <div className='imgDiv'>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className='toinformDiv'>
                        <h3>Deniz</h3>

                        <input onChange={toplamDeniz} value={userSelect === "user1" ? user1.denizoy : user2.denizoy} type="range" name="range" id="" />
                        
                        <span>{state.deniz}<FaStar style={{color : "yellow" , marginLeft : "4" , fontSize : "12"}}/><span style={{marginLeft : "19px"}}>{userSelect === "user1" ? user1.denizrezervasyon : user2.denizrezervasyon}</span></span>

                    </div>
                </div>
                <div className='bottomDiv'>
                    <div className='descriptionDiv'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam fuga totam ut facere, dicta deserunt temporibus tenetur illum, corrupti, doloribus voluptatem? Tempore, sunt. Repellendus unde voluptates repudiandae. Accusantium iure harum maxime doloribus tempore facere, soluta in reiciendis illum sapiente blanditiis, mollitia quaerat, saepe vero pariatur delectus. Natus vero suscipit sequi eligendi et animi eveniet? Laboriosam, cupiditate pariatur? Id saepe ad vitae veniam! Cumque, deleniti!
                    </div>
                    <div className='selectDiv' >
                        <select name="" id="" onChange={changeDeniz} value={userSelect === "user1" ? user1.denizrezervasyon : user2.denizrezervasyon}>
                            <option value="pazar" disabled={disableddeniz("pazar")}>pazar</option>
                            <option value="cuma"  disabled={disableddeniz("cuma")}>cuma</option>
                            <option value="salı"  disabled={disableddeniz("salı")}>salı</option>
                            <option value="perşembe"  disabled={disableddeniz("perşembe")}>perşembe</option>
                        </select>
                    </div>
                </div>
            </div>





            <div className='container'>
                <div className='topDiv'>
                    <div className='imgDiv'>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className='toinformDiv'>
                        <h3>parti</h3>

                        <input onChange={toplamParti} value={userSelect === "user1" ? user1.partioy : user2.partioy} type="range" name="range" id="" />
                        
                        <span>{state.parti}<FaStar style={{color : "yellow" , marginLeft : "4" , fontSize : "12"}}/><span style={{marginLeft : "19px"}}>{userSelect === "user1" ? user1.partirezervasyon : user2.partirezervasyon}</span></span>

                    </div>
                </div>
                <div className='bottomDiv'>
                    <div className='descriptionDiv'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam fuga totam ut facere, dicta deserunt temporibus tenetur illum, corrupti, doloribus voluptatem? Tempore, sunt. Repellendus unde voluptates repudiandae. Accusantium iure harum maxime doloribus tempore facere, soluta in reiciendis illum sapiente blanditiis, mollitia quaerat, saepe vero pariatur delectus. Natus vero suscipit sequi eligendi et animi eveniet? Laboriosam, cupiditate pariatur? Id saepe ad vitae veniam! Cumque, deleniti!
                    </div>
                    <div className='selectDiv'>
                        <select name="" id="" onChange={changeParti} value={userSelect === "user1" ? user1.partirezervasyon : user2.partirezervasyon}>
                            <option value="pazar" disabled={disabledparti("pazar")}>pazar</option>
                            <option value="cuma" disabled={disabledparti("cuma")}>cuma</option>
                            <option value="salı" disabled={disabledparti("salı")}>salı</option>
                            <option value="perşembe" disabled={disabledparti("perşembe")}>perşembe</option>
                        </select>
                    </div>
                </div>
            </div>





            <div className='container'>
                <div className='topDiv'>
                    <div className='imgDiv'>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className='toinformDiv'>
                        <h3 className='h3'>Gezi</h3>

                        <input onChange={toplamGezi} value={userSelect === "user1" ? user1.gezioy : user2.gezioy} type="range" name="range" id="" />
                        
                        <span>{state.gezi}<FaStar style={{color : "yellow" , marginLeft : "4" , fontSize : "12"}}/><span style={{marginLeft : "19px"}}>{userSelect === "user1" ? user1.gezirezervasyon : user2.gezirezervasyon}</span></span>


                    </div>
                </div>
                <div className='bottomDiv'>
                    <div className='descriptionDiv'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam fuga totam ut facere, dicta deserunt temporibus tenetur illum, corrupti, doloribus voluptatem? Tempore, sunt. Repellendus unde voluptates repudiandae. Accusantium iure harum maxime doloribus tempore facere, soluta in reiciendis illum sapiente blanditiis, mollitia quaerat, saepe vero pariatur delectus. Natus vero suscipit sequi eligendi et animi eveniet? Laboriosam, cupiditate pariatur? Id saepe ad vitae veniam! Cumque, deleniti!
                    </div>
                    <div className='selectDiv'>
                        <select name="" id="" onChange={changeGezi} value={userSelect === "user1" ? user1.gezirezervasyon : user2.gezirezervasyon}>
                            <option value="pazar" disabled={disabledgezi("pazar")}>pazar</option>
                            <option value="cuma" disabled={disabledgezi("cuma")}>cuma</option>
                            <option value="salı" disabled={disabledgezi("salı")}>salı</option>
                            <option value="perşembe" disabled={disabledgezi("perşembe")}>perşembe</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
