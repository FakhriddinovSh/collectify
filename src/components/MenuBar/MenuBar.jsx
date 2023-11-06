import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '../../components/ui/menubar';

export const MenuBar = () => {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>More</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Add Admin</MenubarItem>
					<MenubarItem>Remove Admin</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Go to Dashboard</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
};
