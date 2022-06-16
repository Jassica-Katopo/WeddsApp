import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import { IconHome } from '../../../assets'
import { IconTabHome } from '../../../assets'
import TabItem from '../TabItem'
import { connect } from 'react-redux'
import { deleteParameterAllVendor } from '../../../actions/AllVendorAction'

const NavigationBottom = ({ state, descriptors, navigation, dispatch }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.contentWrapper}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }

          //tambahan for delete props yg get all vendor by vendor
          if (route.name !== "Home") {
            dispatch(deleteParameterAllVendor())
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

export default connect()(NavigationBottom)

const styles = StyleSheet.create({
  contentWrapper: {
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    paddingVertical: 7,
  }
})