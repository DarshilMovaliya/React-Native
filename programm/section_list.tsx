import React from "react";
import { View,SectionList, Text } from "react-native";
import ExStyle from "./styles/style";

const SectionLst =()=>{
    const sectionlst = [
        {
          id: 1,
          name: 'Darshil',
          data:["PHP","JAVA","C++"],
        },
        {
          id: 2,
          name: 'Himanshu',
          data:["C","PYTHON","ASP.Net"],
        },
        {
          id: 3,
          name: 'Sumit',
          data:["CSS","CSS3","HTML"],
        },
        {
          id: 4,
          name: 'Ronak',
          data:["Bootstrap","Android","C#"],
        },
        {
          id: 5,
          name: 'Jenil',
          data:["Flutter","Dart","Firebase"],
        },
      ];
    return(
        <View>
            <Text style={ExStyle.head}>Section List With Header</Text>
            <SectionList
        sections={sectionlst}
        renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
        renderSectionHeader={
            ({section:{name}})=>(
                <Text style={{fontSize:30,color:'red',margin:10}}>{name}</Text>
            )}
            />
        </View>
    )
}

export default SectionLst;