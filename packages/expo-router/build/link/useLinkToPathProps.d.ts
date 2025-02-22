import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
export default function useLinkToPathProps(props: {
    href: string;
    replace?: boolean;
}): {
    href: string;
    role: "link";
    onPress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
};
//# sourceMappingURL=useLinkToPathProps.d.ts.map