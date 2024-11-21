export async function get_all_svx(content_path, lang_val){
  let content;
  if (content_path === "news") {
    content = import.meta.glob('/src/content/news/**/*.svx');
  }else if(content_path === "projects") {
    content = import.meta.glob('/src/content/projects/**/*.svx');
  }

  const folderStructure = {};

  const iterableArticles = Object.entries(content);
  await Promise.all(
    iterableArticles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split('/').pop().replace('.svx', '');

      let folderMatch;
      if (content_path === "news") {
        folderMatch = path.match(/\/news\/([^\/]+)\//);
      }else if(content_path === "projects") {
        folderMatch = path.match(/\/projects\/([^\/]+)\//);
      }

      if (folderMatch) {
        const folderName = folderMatch[1];

        if (!folderStructure[folderName]) {
          folderStructure[folderName] = {};
        }

        folderStructure[folderName][slug] = metadata;
      }
    })
  );

  let parsed = []
  let article_keys = Object.keys(folderStructure);

  for(let i = 0; i < article_keys.length; i++){
    let this_key = article_keys[i]
    let this_global_data = folderStructure[this_key];
    let sub_key_list = Object.keys(this_global_data);

    if(sub_key_list.includes(lang_val)){
      this_global_data[lang_val]["slug"] = this_key;
      this_global_data[lang_val]["lang"] = lang_val;

      parsed.push(this_global_data[lang_val]);
    }else if(sub_key_list.includes("en")){
      this_global_data["en"]["slug"] = this_key;
      this_global_data["en"]["lang"] = "en";
      
      parsed.push(this_global_data["en"]);
    }else{
      this_global_data[sub_key_list[0]]["slug"] = this_key;
      this_global_data[sub_key_list[0]]["lang"] = sub_key_list[0];
      
      parsed.push(this_global_data[sub_key_list[0]]);
    }
  };

  parsed.sort((a, b) => new Date(b.date) - new Date(a.date));

  return parsed;
}