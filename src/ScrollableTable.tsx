import React, { useRef, useMemo, useEffect } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';

const Cell = props => {
  const { cellWidth, children } = props;
  return (
    <View
      style={[
        {
          backgroundColor: 'red',
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: 'white',
        },
        cellWidth ? { width: cellWidth } : null,
      ]}
    >
      <Text numberOfLines={1}>{children}</Text>
    </View>
  );
};

const Row = props => {
  const { cells, cellWidth } = props;
  return (
    <View style={{ flexDirection: 'row' }}>
      {cells.map((cell, i) => {
        return (
          <Cell key={i} cellWidth={cellWidth}>
            {cell.value}
          </Cell>
        );
      })}
    </View>
  );
};

const Table = props => {
  const { content, header, columnWidth, tableHeight } = props;
  const yScrollPosition = useRef(new Animated.Value(0)).current;
  const stickyColumnScrollViewRef = useRef<ScrollView>(null);
  const contentScrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    yScrollPosition.addListener(position => {
      stickyColumnScrollViewRef?.current?.scrollTo({
        y: position.value,
        animated: false,
      });
    });

    return () => {
      yScrollPosition.removeAllListeners();
    };
  }, [stickyColumnScrollViewRef]);

  // extract the first column
  const firstColumnData = useMemo(() => {
    return content.map(data => data[0]);
  }, [content]);
  const tableContentData = useMemo(() => {
    return content.map(data => {
      const [_, ...rest] = data;
      return rest;
    });
  }, [content]);
  // blank cell
  firstColumnData.unshift({ value: ' ' });

  return (
    <View
      style={[
        { flexDirection: 'row' },
        tableHeight ? { maxHeight: tableHeight } : null,
      ]}
    >
      <View>
        <ScrollView
          ref={stickyColumnScrollViewRef}
          scrollEnabled={false}
          stickyHeaderIndices={[0]}
        >
          {firstColumnData.map(data => {
            return <Cell cellWidth={columnWidth}>{data.value}</Cell>;
          })}
        </ScrollView>
      </View>
      <ScrollView horizontal>
        <View>
          <Row cells={header} cellWidth={columnWidth} />
          <Animated.ScrollView
            ref={contentScrollViewRef}
            scrollEventThrottle={16}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: yScrollPosition,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            {tableContentData.map((tableContent, i) => {
              return (
                <Row key={i} cells={tableContent} cellWidth={columnWidth} />
              );
            })}
          </Animated.ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
