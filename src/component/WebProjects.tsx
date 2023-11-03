import {FC} from "react"

import styles from "../style/module/Projects.module.scss"
import ProjectEntry, {ProjectMode} from "./ProjectEntry"

type Props = {
	visible: boolean
}

const WebProjects: FC<Props> = (props: Props) => {
	return props.visible ? (
		<div className={props.visible ? `${styles.list} fadeIn` : styles.list}>
			<ProjectEntry
				id="simple_blog"
				name="Simple Blog"
				mode={ProjectMode.LEFT}
				logo={"ReactTemplate"}
				description="Simple blog website that supports authentication, email verification, handy article editor and much more."
				images={["SimpleBlog"]}
				url="https://simpleblog.kpgtb.pl/"
				github="https://github.com/KPGTB/Simple_Blog"
				technologies={[
					"teenyicons:nextjs-solid",
					"akar-icons:typescript-fill",
					"akar-icons:sass-fill",
					"teenyicons:mongodb-solid",
				]}
			/>
		</div>
	) : (
		<></>
	)
}

export default WebProjects
