import React, {Component} from 'react';
import {ToastAndroid,Button, StyleSheet, Text, TextInput, Picker, View,Switch, CheckBox, Slider} from 'react-native';


export default class AppBanco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moneda:1,
            capitalInicial:0,
            capitalFinal:0,
            correo:'',
            monto:0,
            plazoFijo:'[[RESULTADO DE LA OPERACION]]',
            dias:0,
            };
            this.hacerPlazoFijo = this.hacerPlazoFijo.bind(this);
    }

    hacerPlazoFijo(){
        ToastAndroid.show('Presiono el boton de hacer plazo fijo!',ToastAndroid.LONG);
        let interes;
        let tasaInteres;
        let monto=this.state.monto;
        let dias=this.state.dias;
        if(dias<30){
            if(monto>0 && monto<5000){
                tasaInteres=25;
            }else{
                if(monto>=5000 && monto<99999){
                    tasaInteres=30;
                }else{
                    tasaInteres=35;
                }
                    
            }
            
        }else{
            if(monto>0 && monto<5000){
                tasaInteres=27.5;
            }else{
                if(monto>=5000 && monto<99999){
                    tasaInteres=32.3;
                }else{
                    tasaInteres=38.5;
                }
                    
            }
            
        }
        interes=monto*(Math.pow(1+(tasaInteres/100),(dias/365))-1);
        this.setState({plazoFijo:'El interes a recibir es de : ' + interes});
    
    }

    render() {
    return (
        
        <View style={styles.container}>
            <View style={[styles.boxcontainer, styles.box1]}>
                <Text style={styles.font}>BANCO ONLINE</Text>
            </View>
            <View contentContainerStyle={[styles.boxcontainer, styles.box2]}>
                    <Text style={styles.text}>Correo electronico:</Text>
                    <TextInput style={styles.lineStyle}
                        placeholder = "correo@mail.com"
                        onChangeText={(text) => this.setState({correo:text})}
                    />
                    <Text style={styles.text}>CUIT/CUIL:</Text>
                    <TextInput style={styles.lineStyle}
                        placeholder = "00-00000000-0"
                    />
                    <Text style={styles.text}>Moneda:</Text>
                    <Picker
                        style={styles.lineStyle}
                        selectedValue={this.state.moneda}
                        onValueChange={(valor) => this.setState({moneda:valor})}>
                        <Picker.Item label="Dolar" value="1" />
                        <Picker.Item label="Pesos ARS" value="2" />
                    </Picker>
                    <Text style={styles.text}>Monto:</Text>
                    <TextInput style={styles.lineStyle}
                    placeholder = "Ingrese un monto"
                    onChangeText={(text) => this.setState({monto:text})}
                    />
                    <Text style={styles.text}>Seleccione la cantidad de dias: </Text>
                    <Slider style={styles.slider}
                        step={1}
                        value={this.state.dias}
                        maximumValue={365}
                        onValueChange={(value) => this.setState({dias:value})}>
                    </Slider>
                        

                    <Text style={styles.text}>DIAS: {this.state.dias}</Text>
                <View style={styles.contenedorHorizontal}>   
                        <Text>Avisar por mail</Text>
                        <Switch></Switch>
                </View>
                <View  style={styles.contenedorHorizontal}>
                        <Text>Aceptar terminos y condiciones </Text>
                        <CheckBox title='Acepto condiciones'/>
                </View>
            </View>
            
            <View style={[styles.boxcontainer, styles.box3]}>
                <Button
                    title="Hacer Plazo Fijo"
                    color="#143E52"
                    onPress={this.hacerPlazoFijo}
                /> 
                <Text>{this.state.plazoFijo}</Text>
            </View>
          
            
        </View>
        );
    }
   }

   module.exports = AppBanco;

   const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    boxcontainer: {
        
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        
        color: '#333333',
        marginBottom: 5,
    },
    slider: {
        alignSelf:'stretch',

    },
    contenedorHorizontal:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    boton:{
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
       
        flex:0.5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#329BCB',
        
    },
    box2:{
        flex:6,
        justifyContent:'center',
        alignItems:'stretch',
        alignSelf:'stretch',
        backgroundColor:'#C1E1F0',
    },
    box3:{
        justifyContent:'center',
        alignItems: 'center',
        flex:1,
        backgroundColor:'#EAF5FA',
    },
    font:{
        fontFamily: 'Georgia', 
        fontSize: 20 ,
        fontWeight: 'bold',
        color: '#143E52'
    },
   lineStyle: {
    margin: 15,
    height: 35,
    borderColor: '#143E52',
    borderWidth: 2,
    borderRadius:64

 },
 text:{
    paddingLeft: 15,
 }
});