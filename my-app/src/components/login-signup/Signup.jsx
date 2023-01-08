import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { SignupThunkActionCreator } from "./AuthReducer/Actions";
import { useNavigationType } from "react-router-dom";

function Signup(props) {
  const [accountType, setAccountType] = useState({
    type: "familyAccount",
  });
  let navigate = useNavigate()
  const [input, setInput] = useState({
    firstName: "",
    surname: "",
    mobile: null,
    birthDate: null,
    gender: "",
    postCode: "",
    store: "",
    email: "",
    password: "",
    contactOnEmail: "OK",
    contactOnSms: "OK",
    contactOnDirectMail: "OK",
    terms: "",
  });
  const dispatch = useDispatch();
  const handleFormChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, "  ", e.target.value);
  };
  function handleAccountType(event) {
    setAccountType({ type: event.target.value });
    console.log(event.target.value);
  }
  const handleForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(SignupThunkActionCreator(input));
    navigate("/login")
  };
  // useEffect(()=>{

  // },[form])
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <h1>
            Create an{" "}
            {accountType.type == "familyAccount" ? (
              <span style={{ color: "#0058a3" }}>IKEA Family</span>
            ) : (
              "IKEA"
            )}{" "}
            Profile
          </h1>
          <p style={{marginTop:"15px"}}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          
        </div>
        <div className={styles.leftImgDiv}>
          <div>
            <img
              src="https://lh3.googleusercontent.com/LPmHUs-CArHU-UyKWt5BoTUmJ8UsDipKi4AQiq0D2FlexdgbYLy6_47127j1W7REAfQLke9Edk2tBG9bEecaRa9dvwdstBDhzD-lmhcNQXlAVEdDQIGCQDEWcnby094k6kcmgJkFwHwcj33201cl0DkyORGZTjm41xDSsCFlvtBRssJAhZhUCljW-Xj_uHeYuC8UmTNo_o1aZ9YpUYuXyZ34d_1SYkFgKsUXyHbG7LpjND8Fh64BUhF2ZCWQK5IlRdyPAnvP01mijmmGxKz2HFzQot2XGsZ9PUxqN7-H7vhoePy6OXbwOufQOT8A9FOU8oea_eOAF2wMxOBxTfHE2Qn7qON8s4WBkPV9VyTTrSnnNKdg8c2LiYvGNoFy8ooKNTvPkcThK61qdcQRay_ZBECfD4Tsi77GyskgDjlK7dHbpXfdLPeB_5jJM-_ujwBSstNwvdrELEtwsixjWQH9KNLnkXGe91zJUbEdLbMDO8Y7Gv58fWN0QAxNy_U2PpZtDQ8_yqJlvUEQM_B32h9l0vfM5Urb5FYgB3saKFfatG8KyALnmPxRKUpP-yTJr1A3d1OInb6E_cKHcWbojTO3vt9vn5J6f9ECymIQHVglNXIf6vrbvT4mqLmTZ1ySxETizGBlO3KDJmguZcJ71GnTVk-svuhIyKuChhGGX3Rm0G112WPSozxRL1YRHOMpjGCxA9xNlRnHHzRu3i7ff1HSeCf-wOLlovmml-OYlyP7S7_7_BT7R22aux-xozJEiKZ1oYObFXj5b3UPV9tBciwjrERHavwWQ3LAgbM3yfChKetCPF0p0v7NrDLtO_bgihfYVtSC0B0WpDszbI8z-Fh1FN3P6JauY4CKSWWRVpb2S4mR6_jyh5XmGkm-iCwisB-mqUoRNaEYrllbNh2CqHR7UYxUHHhi8S8ESUnWBYvmsjqKThTs=w211-h260-no?authuser=0"
              alt="1st"
            />
            <img
              src="https://lh3.googleusercontent.com/ng9faDmKKZuTao4dpgO4vhLE6mE6riV5DeyJlUPpuFQhipZRHdvH88fuaaXKc0mI0lYwjfoB5Nc4srUSj7wvyTZxFo_truyzOgDnP8-D1zMwbWpJTSnZ4pFW6-yplNy6PXX0ScKLkf45PZmT6qvPMBw5QEOTbGcTseLMFwwpHKX0Yxgnccuyq7IrBr95ok0G38Cx57dLIGBG9dsNcUgYBJX8lH5WCbjwTNgFUDn98_eSjcxiMgaqEHY7kEjx9GUuFGTcxhXutCO2_dQHIhKLoXGuL2bL9MNnvGVfEkU-q22R2mF3AHr7HXp5IlofX7G8o4O9-H7iwOJ9l3Cds61SzH75-Vlhs-RFrqxFk7oemg_i6LFacOarZ3waR8xS9BDNKYQU0jIcFroFzyNr78kcmjGnVHGPecTCc236oy42jPHC4zdoCFooPes860PG7lL1QRiYliJtFn7v6mNTEndy64JB88azmw6inB7H1WB3shXN3si-cadA_WoQrfgvOUNRSlP4zgNXEK-cipWHjOybi0-W87R9X7DsfH-ZbzZ70YwmmcPCQLKx3lyLLE--EQM7Fe96ufgQJCQ--iVtfsfAAaS0RJy1nlxnam5ltsMrWbARvwIWDcad-rHmKB4-98lF1AeY4E5d-ZDsm_zPr647GnCnN1jpDaR5xkeMY-9sdnBEt6U_nh3l9_oX75NR3IStUyBTTpORD6MPwtrJsyCHywKcjpWVT464VuzxZvTbGAuUUjU1nLeVSxlsqXwqBbyiNyPSHJeUcl9NnXJ9HoT6UgqPjL_Ab75QFJCz8CT3jvTTSgJZ_DgUHc_8nL9k-tFtYyDOu0l7aoIvVCi9jQQcdkiGDDH-nOZGeDlRF_mj_oM8qoaZvtWMK7BAdtpnJwsaDoEvX_v_scDdmesO85fIXsAivGmDE0TajmI13VPoNFkfXZh4=w212-h260-no?authuser=0"
              alt="3st"
            />
            <img
              src="https://lh3.googleusercontent.com/hHNJA75LxclOLaw2bfF76Uwx1dif0CVNUsEPybLi4t0GBhEuOWGBXCBtT0YP8iZbfzEszfCp2lvCni5gwMD2aGy94xVzQZJf8VnaMxsEJvriIpX2P_szZmENuW68U9GMekrfq6nsKq2Vb-dh5pY7kMoNd3QZb2i4v7FSzEIxVEwW-fmqPeoSv_gmbLNuP5AUuwlP9wM6VRjQsj3I3Ak77xa6-AsULOKGQtpkcDS_vWiF_jNieiBq1q7Q5Wjc_6ZB2tFdWpC1lwPuj-G4mk3VUHzbNplCzkc3vsqysJSZ-IQwFJhsjlH7bbrJWmi1kp2D1vKPUfsUmssKg2j_x3hZzNjwQZp2I6OP-RKIHTR4dDnEBOSUx69S_sSCp5n__RJGL0TD6BM12cR57fDcu2TR5pWdul8_Ku_ZN2V_nBf4P7HL9Gbk73Qy_zf8bZDp3CdLgP2ypvrymCkNTV7_AIUya4REaYn7WTBtSA93ARKT83pfPFoDyrEj4kBeZhVYKAtBc2nwYUgJuRT5ZhQdfCqFSTVZSG0kxzWTCjtnfkls5EQ__AqWULhm4CiSLHw2F_wPVwu1KtqUgnLUCxO0Px3Rm00n5qDL8xv1-WSc12FpWmnDgplT6vVVWYTl1URQ1_7d_ViEAzkpc9j5XKaIzu4ZF__ojdqK42A4Vl2rUvS9J8mkCg3Kc9eE8Zr6rwihaKxMs1SoGvbuCe8sXzPlwATdTDSPOfy0u0C6KboObhEQVYiVqscVlp1blRADll3AO2CaGeD5WfxHsJ-OVXYaKcoNz1bO4oiYftuVPu-tfWq34o9e8wi7zFxrka6Zj1eAcPNPrBjkw9vg8GrpNvf4jAsaGYOUuQJvoqSt2STxMa_4Rf25cBQreE3j6HcJDMUi2llZmykSB5J22Y2YHV2iz96CHrkg64BZys2YE5uIsth_tEGnYeYF=w210-h256-no?authuser=0"
              alt="5st"
            />
            <img
              src="https://lh3.googleusercontent.com/7bANR_0npIt_6aSaHMk2rP_xCelQ9Uk4wmD3EfsSEGcrVFKsflq-YNVDVEu5tsGMNcDS7kjlwEs1HLwyoDsjtA7fWPgXZYA61d_31iB3pc6WN3zvw4-QxADxBb2XSn3G9jQDnJWNi7vsZKPPnKaNBvLOHTu-0hdm8uuTJ0j8tK1bGvmTuGep25VWW0Th4C7G1L-CEcCuhJYKI79Kr-3vzEGcF195DnmqsUMRJmshclr7Gtn698RtjLe1w_YnAtEWG4Ma3i8_oFT8Aw3idck-EVoBePB8-d8f2rNDk0jMVRwVf5VSmRRktRwAYp4c4AJgWYmyejDBYMNSMEQr-bMHMZR8Rtl4Ya40Cg0A5eV32_8fEPiX0jDpGorje7-3SahepxduGnWNTMqtQJL4Qb1YTaXcRMPFACLEM8meY5DcfbaVos98HNnUTapZNPf214cOAEL_L5fP-FL2Phfkk6dpKQfyD2GvGcq6izWZKIcOj4CnlEQCnQ_cAr0W2evmJmItyUru-n5YQwlGtzgpxwQFLnPQEcGtWdMsOwHBuBabMiEcQc8zxGkpqvuAXJgOnJdiEVhyvJgNJoafidP5dunn3duWzaXXkOAOd7syr3r-7ErkVO96C147RhCBV-ozFf9-y4RFsVSKFQs9xCANy8046n_22dtjfdFNZ7tnfOaODK7OIJY56pjh9G_dBhr4T6SSns9rvxOY1gTfL_ImsGNpP5vb_GTnXKh6NIjc3I2Ni3sUt5KHHOzBni95zDMNBYNRcCGjV43-UQcKNC-6JtwL6cVCrnh5rtenGUw_edvvSopOe4uG82i2XuxhkWAzLkQiGVrd0h4Drq8weWAGIMC9LI3zo6gtQEdU3bek_9NSwm38ID-01EDPpjYOyoSjMFUJ44VptmanvHpB8njNC1FhiIonToa2pLVG57SbAE71WSY3qy8L=w211-h192-no?authuser=0"
              alt="7st"
            />
            <img
              src="https://lh3.googleusercontent.com/hzQ8SwHwbZ7A00xYVbb-7vlAUQ1TDo8ln16u_m0lm7jS5iUO0Ttk9VyJYtkyAPf7HB6tjLbmzcUOUwDWL4UU3vyyrd1qP278qJVj_77K6KQVkHdLKhtALd-whjn_APRSnxgxpf0gv90Kmb_Hp9pjJkohhUCxjnSeNg3h1m5SUfBMvevjZqNkeRFxkNMDW3zofDna9RieRS4JdibGaJ726WOiaZFZwc8EL1fQJvZUiok6Y4RifQIyMWFh-kclZpM_F-YdX2pFEbg9TvO0TcAswaqqgkAhHJfs1Wfs0sVbYV8zozHna9TH3r1epdmII4sjp3JWHeNmeilRuhGnXhD6mfGf5Ow5pECCrkhbGTNmAUAOdeGl6ud2VGksmZNnM2sLYeITnTXV-vz_DgnRQWjwtbwYUnsOdAcOxhITUwhNF9vmd-QZLNXf1KjN9Am-nEk_cHK6CmU2TTz9Fk0Dt6NBZAZ3N99DUZ6VFi6SzgHGhTeUyi4G9cMAyMUYrfMwslcwg-JVxx8hanPatEPcr9R_FbUF7ZTdO835suzg1xJ-54WPOQiMEVjueMQ5Fc_POrw3b6Msa6w1iHbCubnW9hq7LHK8yo8QUOAl9VZPcOeBjO-AFeOkpckegX14wzyC4jhGUF_8vOXrozFNyVXyxOUX24m4DuS9JLYsH_V5-bZyW-UiLn_GaSA0eqgGUbRA9ff7at6lMKJz_03lY3w7Vfi5dYwUE7ONE7U0dDNqGPu5_AOzHY3JAgUoiaWykkHv4c_CVqhIy81p4TJ5x6EqmWHWTvmZCKcx_k7y5Je7uKA8_dny3yIEBNItg-nJ47EyV_lLTYfYVHivNuvWpY3zybSeLwLfrF6vpgJALH0hUKUqaKlb9vqWEUY1ub6rZMTloJL3pQ-sHZ6rzHeV5AKFZDnvzIg2Y7gOTHQTdD-0z-c3L9l1tcVX=w211-h258-no?authuser=0"
              alt="9st"
            />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/yAakRV0CLPrsKoZbWf1nNoKdHKQ9JWRoktRD5NJSwNhJVjc3MiUoTsfeur13CUJgJvm706WcGo2LkCXmcqLtnnP2S37SPZXAAaZDY_FthJDAyfxnYqPJVwgxQB6Y54gj0bDk4LPnZZOCIQWn_37GwKlqnG08EwTc28hTD6rXW9pXWDWmcWiOQEsK1_VvtkTv3UNk1PK-vPYs2r1xB5uLWzSjvyOmizC1TLBign51NvZPdQ70-To7d_ef-ijO92Q9llaDVdnf2_MplXF0PVMTZGSXoMlrSJJZSwd4mWjuObErqQQ3DKGs9_y-Lxck93ImYJzQg-10TI0n5NRN2zvYngDbytpdAW28QD36lQegpWHw6b-hy-RQa6gU81a5YZdP9FYTE50Tw4GswmsnTJkU0WnbijqUx5mkgF3-LSHa5FzJPUSeqqStqL6vF1Jgp-T9DjjVwG9bRDGdMPvgMM1QsV7fqVC4fSEIAVfDoUtut1wZenBWToMHxxgeEh_124TbtOg-RGWMI8XlGTesjSGRIcCvYDy3OgcuXiWJcQUOfKiExiyztjDqJ1rBQ0k0ON8uInu8Xc5PnY_bS1yxE2IUXfuoJO986XmjWrSevVxAhDlxsTqPzV9jnZU3J72FLXOXJtSGaUnhL8IO6sEHSBDdfzQzESiVcl5oiu3euO3z5Osg5wuQous67gKsF4vI_DM-1HnzD9mTrIf73j_jA6TC53nqtfAenDPI-cOi8re5zz_k_rMELPKaEytmT0-laKvpqTWOWfSDhSMN2KFQJVJ0OtCarQTEthjoQVZOQT6DYjGGsTlMhoogk5ADADZnqkzU_W0cc1IxaVZXu4M7261MkOBA4h7WuFVTcGbd7odEBiavgVzBVCwMFJz69eEhOPvPj30NelfvKCcxgFArEZ4hX0yJGBJfp1QUJ3PqnekaWCu1T-5s=w213-h195-no?authuser=0"
              alt="2st"
            />
            <img
              src="https://lh3.googleusercontent.com/tV03XOuDtikeKFpxnFPU1hhcuz59IJu6XIAV5uLgba0FS_NibXiUA4pI9D_OEIQT73anUQ8JWOcvAoZxZJYd84K_xe6ye6LOkN12TK_HHQi9cbqGcfST9mVftfuC14gn8DvLpcpWI8MrnshFFbpMYifSvU69a3yDvuo1Gkv3a8cIXKN8ibnWNjKYOv99HO--2gYmO521mygV1Xa9G4tWD4713P29qU6sdgNfMI6EhVb9nEWyabugOCyXvT_nF6tmTdy78GVQBpUXuNwgVrUdC1qdf5SaZhIBoWwHouvjJkRVQ6l-h8YpF35ipbMFmdYMqAOeoM4f4b4pPs4K_lv3Zkc6WzOMXAkgi01Bs9MVrYSy1LOSGHjNHV-cDn5onKOUvfG7SlTP5ACep04chhjWRt6Aoeonb9TDrfoXEgYg5elZeWnBV-jL1YsnkXbLqFnTRq28qO9OlSBy4L2WxPMtKLsEVH5DGzkVbrjlb-WdL9syUnWv9f2L0rW5HgN6gY1TAyxEWpgoF6MRlucSHQLGMM53tfv_fjYrxqiUWLLYHxpxwAvPcQ0Ic_3di2SRYu0jfwxrCOFhpObIGBcIALGSTqXBgQSM5-u1RIsn6lOlipeAErZTSLItOOm3FHft2Ml8hMD5rf80nYGAxXE6iHN_-LJO9ZH2UhwbiRAc2OXlgSav929hSqhOfEE2AWEWvkujNxr_x6SPz-y_KawXFK20ZUWeA4J6pXLIbtULtKcxZMlkY7P4shUOrcU3wM_slIxFSuoRUzAAwf31yYnAEzxdxB3U5C0AiKfKovpWu5CZDO_gOeErutplujwg4PplaVm-Ti_M2A88ncyxyD4f_emFIpvO2W3LLpmaOSyFO0RR02ZtEqbxLj9Iib7Iae7TJinSmxjOtZ4jxkTvXdlYQOF8eVWAolo164c_4Wj1BAML3Q16zqG9=w210-h196-no?authuser=0"
              alt="4st"
            />

            <img
              src="https://lh3.googleusercontent.com/-d8t6BdkyzTCCeDKzVh6CYubAuBNdR52YbOWLJy5ckspGAENqdftppA9wX28pgC4jv4tBWkIAhw9_dXFU40A_wjfVj4bAQmh7R7SuGF3NMJye1AGazW5B6W736XbRXbWGSYKDk_xENosAT-TuQtxGaT4x-qJXSXdNWA1KAOzYq0dxzb_qO0z91_0Ph7QBnV75OFJagdM2o5Fe2qoe4Sdp2unzDeEXXamLfBb3drYQ7TIVE8MNj1YnWlccv1Po2HRgwUGg6-UOSy70XgFLGvWUoW994Hi01R1qlbAGuAH5XA2Nf_NQVqnp6S-gGndzHSF34VvGYl9gKruVIq0zVcCgg609vrTkK2RdLDDUMxnBDMa5sFrjF7zDWjXdN1l0PWypxe-JfbcyPSe47EGeQTI7sGQMapIbF6jUX9dMKCmH08haTAs4UnmhVrTicgQ_ShIZVbzuk3x0PilPBoXMqfiLbXvxFzy9616OCBHDDKqYZDVZf4QQcKRXipAVHBwjyAaWMOrMQw7I20gcWGe5z9XJtdI750WM3f8zuVQkLHpNZ5Xry6ao14aa1KL3Wf5QdvY4NBUF7N0wpM5S0wWaebT4JlTlgrEkwaCcX1o5W7-flRefM7hGxgxh9KA8ioVDnkDB5yLZVgG_g-w3NYOJGIgF-JOgWecftdoB1z9gGa-X5ydNuaYDhN71tj0xI3XqHnXKSOCV7CYoVozLhew7CBRhwX1CM5gkgBTfaVqfjU694gVPaewxfa9fGEdJ9Z7g8D_O2Hn7GZwdlKI6S1kNDNeyo37TftTfpq4p3HR2ZPOjtdg4WOdimfJGeHRl8sUI8TDafTdYQN_hSGGRuAgkFkiNJO-UWxfOJ0Jy67bdOvkzc-2ZFN5ZMqD6b51gXGwbTSF9Km0g8Yuzy_pO8B6iapTjrx4mmccbkCL20_wWZO9NoHz6Kii=w209-h196-no?authuser=0"
              alt="6st"
            />

            <img
              src="https://lh3.googleusercontent.com/bG8l6qTJvM-OtqjCb6guLcfhXvwJAprqsoQ4AyVKk9XgVRphPsMF-xiuR7JQpqwnZH_KdWXYS0M3uQZa-15G_sSTpRFH6bC2_-LD-ADXovIPxB5t8moR7YkH-NGSHOyyrmj4BNSS_o02g849fqvv14QtBY4gg43gwhdF5oJm9i85Bx_pgwi7EaQzp4q4We4s4gdBjiZz_qUicNISpUl1rdXrHXb-GKke3ZpO3C6MwmkA8vMXW9JcKf2F2MAWsGB6aaiDvB4DOXxiS0TjewwL88OpHnq2yd1WDIg50iGckCeEmkqJ_8aOpKcAO78ybdUfWPCcCTgKBB1e0Jy9uPZDZcb1VSFcPATCOupwukP1R65dbQEcdjKBb4qdjwBCYgE3cNJE2jVMDV_eMga-GQVFwn1tr-SZn5zN9hc34t3yYixyWUNi4Be__CLYav4QT0GHa3geXspoBINUO_OVy_5o-YBljlRloUxC95MCG5i0uzPdnZiZdLBucxOFWi3HGwmgQL_r75UbjtHppSLCMPKqPaBIOap7OmxswVHvNFEs9guQGioqyiGYo5mJ4ioRYj1LOXlMJ9VabRB1tM8V2Vtw_QbeB1UWanmF6W4qiXXfjVUzI1h_dbneac0qNYi39Rp5rxxwcCUt4XS_VLVP17vvOYPdgAkOgim1cY77xl1G5TD9Syy8cIHuS5zVv0Qt4ez7-xrga-hkflOq9I1RdNoCExx_ublTjEYx2pYVROqbjBNTGRM39ScorEwwaaAto-r5wEKAlFuqaxu-xZ3GIJmUhA3P8xS1tdhBH9dIr247YfDWH2p8KlerNgLqglhOyywutxGqFes9TL3j48jVxGrHp1WRM7TriWmj3p4whv4XMN4EWHETi2l_XjZM__QsNMYJ7II5YA7sZmoftSt3F25HdK1NA6FG1Wozh_2ZGtigisMk7Bke=w211-h254-no?authuser=0"
              alt="8st"
            />
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div>
          <h3>
            Become a member of IKEA Family today. Did we mention it's free to
            join?
          </h3>
          <br />
          <div onChange={handleAccountType}>
            <input
              type="radio"
              value="familyAccount"
              name="accountType"
              checked={accountType.type === "familyAccount"}
            />
            Yes, I want to enjoy discounts, previews and a lot more!
            <Link to="#">Get the details.</Link>
            <br />
            <br />
            <input
              type="radio"
              value="justAccount"
              name="accountType"
              checked={accountType.type === "justAccount"}
            />
            No thanks, I just want to create an IKEA account today. Maybe
            another day.
            <Link>Get the details</Link>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div>
          <form onSubmit={handleForm}>
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="firstName"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>First Name</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="surname"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Surname</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="tel"
                name="mobile"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Mobile</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="birthDate"
                className={styles.inputFiled}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>BirthDate</span>
            </div>
            <br />
            <br />
            <select name="gender" onChange={handleFormChange}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="number"
                name="postCode"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Post Code</span>
            </div>
            <br />
            <br />
            <select name="store" onChange={handleFormChange}>
              <option value="">Preferred Store</option>
              <option value="online">Online</option>
              <option value="offline">Store</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="email"
                name="email"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Email(username)</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="password"
                name="password"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Password</span>
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              checked={
                input.contactOnEmail == "OK" ||
                input.contactOnSms == "OK" ||
                input.contactOnDirectMail == "OK"
                  ? true
                  : false
              }
              required
            />
            I would like to receive news, tips and marketing offers from IKEA.
            <br />
            <br />
            <div style={{ marginLeft: "25px" }}>
              <input
                type="checkbox"
                value={input.contactOnEmail == "OK" ? "NOT" : "OK"}
                name="contactOnEmail"
                onChange={handleFormChange}
                checked={input.contactOnEmail == "OK" ? true : false}
              />
              Via email
              <br />
              <input
                type="checkbox"
                value={input.contactOnSms == "OK" ? "NOT" : "OK"}
                name="contactOnSms"
                onChange={handleFormChange}
                checked={input.contactOnSms == "OK" ? true : false}
              />
              Via SMS
              <br />
              <input
                type="checkbox"
                value={input.contactOnDirectMail == "OK" ? "NOT" : "OK"}
                name="contactOnDirectMail"
                onChange={handleFormChange}
                checked={input.contactOnDirectMail == "OK" ? true : false}
              />
              Via direct mail
              <br />
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              value={input.terms == "OK" ? "NOT" : "OK"}
              name="terms"
              onChange={handleFormChange}
              checked={input.terms === "OK" ? true : false}
              required
            />{" "}
            I have read and understood the{" "}
            <Link to="#">Terms & Conditions</Link> and{" "}
            <Link to="#">Privacy Policy.</Link>
            <br />
            <br />
            <br />
            <br />
            <button  type="submit">Create Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
